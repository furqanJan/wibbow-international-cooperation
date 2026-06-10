import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { brand, contactBenefits } from "../data/siteContent.js";
import SectionIntro from "./SectionIntro.jsx";
import { h } from "../lib/h.js";

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: ""
};

function validate(values) {
  const nextErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    nextErrors.message = "Tell us what you want to improve.";
  }

  return nextErrors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("idle");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  return h(
    "section",
    { id: "contact", className: "section-block contact-section" },
    h(
      "div",
      { className: "contact-layout" },
      h(
        "div",
        { "data-reveal": true },
        h(SectionIntro, {
          eyebrow: "Contact",
          title: "Let's shape your next intelligent system.",
          text: `Share a short note with ${brand.shortName}. This static v1 validates your request locally and shows the information a future backend can send.`
        }),
        h(
          "div",
          { className: "contact-benefits" },
          contactBenefits.map(({ label, Icon }) => h("span", { key: label }, h(Icon, { size: 18 }), label))
        )
      ),
      h(
        "form",
        { className: "contact-form", onSubmit, noValidate: true, "data-reveal": true },
        h(
          "div",
          { className: "field-row" },
          h(
            "label",
            null,
            "Name",
            h("input", {
              name: "name",
              type: "text",
              value: values.name,
              onChange,
              "aria-invalid": Boolean(errors.name),
              "aria-describedby": errors.name ? "name-error" : undefined,
              placeholder: "Your name"
            }),
            errors.name ? h("small", { id: "name-error" }, errors.name) : null
          ),
          h(
            "label",
            null,
            "Email",
            h("input", {
              name: "email",
              type: "email",
              value: values.email,
              onChange,
              "aria-invalid": Boolean(errors.email),
              "aria-describedby": errors.email ? "email-error" : undefined,
              placeholder: "you@company.com"
            }),
            errors.email ? h("small", { id: "email-error" }, errors.email) : null
          )
        ),
        h(
          "label",
          null,
          "Company",
          h("input", {
            name: "company",
            type: "text",
            value: values.company,
            onChange,
            placeholder: "Company name"
          })
        ),
        h(
          "label",
          null,
          "Message",
          h("textarea", {
            name: "message",
            value: values.message,
            onChange,
            "aria-invalid": Boolean(errors.message),
            "aria-describedby": errors.message ? "message-error" : undefined,
            placeholder: "Tell us about your AI, automation, cloud, systems, or cybersecurity goals.",
            rows: "5"
          }),
          errors.message ? h("small", { id: "message-error" }, errors.message) : null
        ),
        h("button", { className: "button primary form-button", type: "submit" }, "Validate request ", h(ArrowRight, { size: 18 })),
        status === "error"
          ? h("p", { className: "form-status error", role: "alert" }, "Please fix the highlighted fields before submitting.")
          : null,
        status === "success"
          ? h(
              "p",
              { className: "form-status success", role: "status" },
              "Your request is ready. In static v1, this confirmation appears locally and no message is sent."
            )
          : null
      )
    )
  );
}
