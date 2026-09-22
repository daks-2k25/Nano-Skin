"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { contact } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { FormField } from "@/components/ui/FormField";
import { GlowOrb, ArcLine } from "@/components/ui/backdrop";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  profile: string;
  message: string;
};

type ValidatedField = "name" | "email" | "phone" | "message";
type FormErrors = Partial<Record<ValidatedField, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  profile: "",
  message: "",
};

const VALIDATED_FIELDS: ValidatedField[] = ["name", "email", "phone", "message"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: ValidatedField, value: string): string | undefined {
  const trimmed = value.trim();
  switch (field) {
    case "name":
      return trimmed.length >= 3 ? undefined : contact.form.errors.name;
    case "email":
      return EMAIL_PATTERN.test(trimmed) ? undefined : contact.form.errors.email;
    case "phone": {
      const digits = trimmed.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 11 ? undefined : contact.form.errors.phone;
    }
    case "message":
      return trimmed.length >= 10 ? undefined : contact.form.errors.message;
  }
}

/**
 * Ponto único de integração futura: hoje só simula uma latência de envio.
 * Quando houver destino real (API route, serviço de e-mail, etc.), a troca
 * acontece somente aqui — o formulário e a validação não precisam mudar.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- assinatura documenta o payload que a integração real vai receber
async function submitContactForm(data: FormState): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleBlur(field: ValidatedField) {
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values[field]) }));
  }

  function handleReset() {
    setValues(initialState);
    setErrors({});
    setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    for (const field of VALIDATED_FIELDS) {
      const error = validateField(field, values[field]);
      if (error) nextErrors[field] = error;
    }
    setErrors(nextErrors);

    const firstInvalid = VALIDATED_FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    await submitContactForm(values);
    setStatus("success");
  }

  const submitButtonClasses =
    "group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-[#ed2d32] via-[#e30c13] to-[#d4090f] px-8 py-4 text-[14px] font-medium tracking-[0.01em] text-bone-50 shadow-[0_16px_34px_-12px_rgba(227,12,19,0.55)] transition-all duration-500 ease-premium hover:from-[#ef5b5f] hover:to-[#c70a11] hover:shadow-[0_20px_42px_-10px_rgba(227,12,19,0.65)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 md:px-9 md:py-[18px]";

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-azure-900 pb-32 pt-40 md:pb-44 md:pt-48"
    >
      <GlowOrb
        className="-right-40 -top-32"
        color="rgba(169,194,247,0.16)"
        size={460}
        duration={28}
      />
      <ArcLine
        className="-bottom-48 -left-40 h-[520px] w-[520px]"
        color="#729bf0"
        opacity={0.12}
      />

      <Container className="relative">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <Eyebrow tone="light">{contact.eyebrow}</Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            text={contact.title}
            delay={0.1}
            className="mt-7 font-display text-[9vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[6vw] md:text-[3.4vw]"
          />
          <Reveal as="p" delay={0.22} className="mt-7 text-[15px] font-light leading-relaxed text-bone-50/70">
            {contact.body}
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-2xl md:mt-16">
          <Reveal delay={0.18}>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-[20px] border border-bone-50/15 bg-bone-50/[0.04] px-8 py-16 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-azure-300/40 text-azure-300">
                  <Check className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-[22px] font-light text-bone-50">
                  {contact.form.success.title}
                </h3>
                <p className="max-w-sm text-[14px] font-light leading-relaxed text-bone-50/70">
                  {contact.form.success.body}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-[12px] uppercase tracking-widest2 text-azure-300 underline-offset-4 hover:underline"
                >
                  {contact.form.success.reset}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-6 rounded-[20px] border border-bone-50/12 bg-bone-50/[0.03] p-7 md:p-10"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    id="contact-name"
                    name="name"
                    label={contact.form.fields.name.label}
                    required
                    value={values.name}
                    onChange={(value) => handleChange("name", value)}
                    onBlur={() => handleBlur("name")}
                    error={errors.name}
                    placeholder={contact.form.fields.name.placeholder}
                    autoComplete="name"
                  />
                  <FormField
                    id="contact-email"
                    name="email"
                    type="email"
                    label={contact.form.fields.email.label}
                    required
                    value={values.email}
                    onChange={(value) => handleChange("email", value)}
                    onBlur={() => handleBlur("email")}
                    error={errors.email}
                    placeholder={contact.form.fields.email.placeholder}
                    autoComplete="email"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    label={contact.form.fields.phone.label}
                    required
                    value={values.phone}
                    onChange={(value) => handleChange("phone", value)}
                    onBlur={() => handleBlur("phone")}
                    error={errors.phone}
                    placeholder={contact.form.fields.phone.placeholder}
                    autoComplete="tel"
                  />
                  <FormField
                    id="contact-company"
                    name="company"
                    label={contact.form.fields.company.label}
                    value={values.company}
                    onChange={(value) => handleChange("company", value)}
                    placeholder={contact.form.fields.company.placeholder}
                    autoComplete="organization"
                  />
                </div>

                <FormField
                  as="select"
                  id="contact-profile"
                  name="profile"
                  label={contact.form.fields.profile.label}
                  value={values.profile}
                  onChange={(value) => handleChange("profile", value)}
                  options={contact.form.fields.profile.options}
                  placeholder={contact.form.fields.profile.placeholder}
                />

                <FormField
                  as="textarea"
                  id="contact-message"
                  name="message"
                  label={contact.form.fields.message.label}
                  required
                  value={values.message}
                  onChange={(value) => handleChange("message", value)}
                  onBlur={() => handleBlur("message")}
                  error={errors.message}
                  placeholder={contact.form.fields.message.placeholder}
                  rows={5}
                />

                <div className="mt-2 flex items-center justify-start">
                  <button type="submit" disabled={status === "submitting"} className={submitButtonClasses}>
                    {status === "submitting" ? contact.form.submitting : contact.form.submit}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.34}>
          <div className="mx-auto mt-20 max-w-3xl border-t border-bone-50/12 pt-12 md:mt-24">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
              {contact.channels.map((channel, i) => (
                <li key={`${channel.label}-${channel.value}-${i}`} className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/45">
                    {channel.label}
                  </span>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-[13.5px] font-light text-bone-50 transition-colors duration-300 hover:text-azure-300"
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
