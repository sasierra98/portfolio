import { useState } from "react";
import { Form, Input, Button, Textarea } from "@nextui-org/react";

export const ContactForm = () => {
  const [errors, setErrors] = useState({});

  const fields = {
    fullName: [
      {
        label: "First Name",
        type: "text",
        placeholder: "First Name",
        required: true,
        errorMessage: "Please enter your first name",
      },
      {
        label: "Last Name",
        type: "text",
        placeholder: "Last Name",
        required: true,
        errorMessage: "Please enter your last name",
      }
    ],
    contact: [
      {
        label: "Email",
        type: "text",
        placeholder: "Email",
        required: true,
        errorMessage: ({validationDetails}) => {
          console.log("validationDetails", validationDetails);
          if (validationDetails.valueMissing) {
            return "Please enter your email";
          }
          if (validationDetails.typeMismatch) {
            return "Please enter a valid email address";
          }
        },
      },
      {
        label: "Phone",
        type: "text",
        placeholder: "Phone",
        required: true,
        errorMessage: "Please enter your phone number",
      }
    ],
    message: {
      label: "Message",
      type: "textarea",
      placeholder: "Message",
      required: true,
      errorMessage: "Please enter your message",
    },

  };
  // Real-time password validation
  const getPasswordError = (value) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    console.log("data", data);

    // Custom validation checks
    const newErrors = {};

    // Password validation
    const passwordError = getPasswordError(data.password);

    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    if (data.terms !== "true") {
      setErrors({terms: "Please accept the terms"});

      return;
    }

    // Clear errors and submit
    setErrors({});
  };

  const CustomField = ({label, placeholder, name, type, required, errorMessage}) => {
    if (type === "text") {
      return (
        <Input
          size="lg"
          isRequired={required}
          errorMessage={errorMessage}
          label={label}
          labelPlacement="outside"
          name={name}
          placeholder={placeholder}
          type={type}
          variant="bordered"
        />
      )
    }
    
    if (type === "textarea") {
      return (
        <Textarea
          size="lg"
          isRequired={required}
          errorMessage={errorMessage}
          label={label}
          labelPlacement="outside"
          name={name}
          placeholder={placeholder}
          type={type}
          variant="bordered"
          minRows={6}
        />
      )
    }
  };

  return (
    <Form
      className="w-full justify-center items-center gap-4"
      validationBehavior="native"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      {Object.entries(fields).map(([key, value]) => {
        if (Array.isArray(value)) {
          return (
            <div className="grid grid-cols-1 w-full gap-4 md:gap-2 md:grid-cols-2">
              {
                value.map((field, index) => (
                  <CustomField
                    key={index}
                    label={field.label}
                    placeholder={field.placeholder}
                    name={field.label}
                    type={field.type}
                    required={field.required}
                    errorMessage={field.errorMessage}
                  />
                ))
              }
            </div>

          )
        } else {
          return (
            <div className="w-full">
              <CustomField
                label={value.label}
                placeholder={value.placeholder}
                name={value.label}
                type={value.type}
                required={value.required}
                errorMessage={value.errorMessage}
              />
            </div>
          );
        }
      })}
      <div className="flex w-full justify-end">
        <Button className="w-fit bg-button" color="primary" type="submit" size="lg">
          Send
        </Button>
      </div>
    </Form>
  );
}