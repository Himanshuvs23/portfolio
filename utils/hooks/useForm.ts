import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { IFormData } from "@/utils/typings/typings";

export const useForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: { value: "", errorMessage: "" },
    email: { value: "", errorMessage: "" },
    message: { value: "", errorMessage: "" },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: { value: e.target.value, errorMessage: "" } });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tempObj = { name: "", email: "", message: "" };
    const lettersregex = /^[a-zA-Z ]*$/;
    const mailregex = /^([_\-.0-9a-zA-Z]+)@([_\-.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (formData?.name?.value?.trim().length === 0) {
      tempObj.name = "*Name cannot be empty !";
    } else if (formData?.name?.value?.replace(/\s+/g, "").length <= 2) {
      tempObj.name = "*Name cannot be less than 3 characters !";
    } else if (formData?.name?.value?.replace(/\s+/g, "").length > 25) {
      tempObj.name = "*Name cannot be greater than 25 characters !";
    } else if (!formData?.name?.value?.match(lettersregex)) {
      tempObj.name = "*Name can only contain alphabets";
    } else {
      tempObj.name = "";
    }

    if (formData?.email?.value?.trim().length === 0) {
      tempObj.email = "*Email cannot be empty !";
    } else if (formData?.email?.value?.length > 40) {
      tempObj.email = "*Email should be less than 40 characters !";
    } else if (!formData?.email?.value?.match(mailregex)) {
      tempObj.email = "*Please enter valid Email !";
    } else {
      tempObj.email = "";
    }

    if (formData?.message?.value?.trim().length === 0) {
      tempObj.message = "*Message cannot be empty !";
    } else if (formData?.message?.value?.length > 600) {
      tempObj.message = "*Please write a short message(Max 600 Characters) !";
    } else {
      tempObj.message = "";
    }

    const tempFormData = {
      name: { value: formData.name.value, errorMessage: tempObj.name },
      email: { value: formData.email.value, errorMessage: tempObj.email },
      message: { value: formData.message.value, errorMessage: tempObj.message },
    };

    setFormData({ ...tempFormData });

    if (!tempObj.name && !tempObj.email && !tempObj.message) {
      setLoading(true);

      try {
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || !formRef.current) {
          throw new Error("EmailJS configuration is missing.");
        }

        const response = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey,
        );

        if (response.status !== 200) {
          throw new Error(`EmailJS failed with status ${response.status}.`);
        }

        setFormData({
          name: { value: "", errorMessage: "" },
          email: { value: "", errorMessage: "" },
          message: { value: "", errorMessage: "" },
        });
        toast.success("Message Sent, I will contact you soon !");
      } catch (err) {
        console.error(err);
        toast.error(
          "Form Submission Failed. Please send me an email at golushivde23@gmail.com instead."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return { isFormSubmitting: loading, formData, formRef, handleInputChange, handleFormSubmit };
};
