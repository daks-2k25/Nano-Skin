import clsx from "clsx";
import { ChevronDown } from "lucide-react";

type BaseProps = {
  id: string;
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
};

type InputFieldProps = BaseProps & {
  as?: "input";
  type?: "text" | "email" | "tel";
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  autoComplete?: string;
};

type TextareaFieldProps = BaseProps & {
  as: "textarea";
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  rows?: number;
};

type SelectFieldProps = BaseProps & {
  as: "select";
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
};

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

const fieldBase =
  "w-full rounded-[10px] border bg-bone-50/5 px-4 py-3 text-[14px] font-light text-bone-50 placeholder:text-bone-50/35 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-300";

/**
 * Input/textarea/select controlado, com label real, erro inline reservando
 * espaço fixo (evita layout shift) e atributos de acessibilidade (aria-invalid,
 * aria-describedby). Usado hoje só pela seção de Contato.
 */
export function FormField(props: FormFieldProps) {
  const errorId = `${props.id}-error`;
  const hasError = Boolean(props.error);

  const borderClass = hasError
    ? "border-[#e35a5a] focus-visible:outline-[#e35a5a]"
    : "border-bone-50/15 hover:border-bone-50/25";

  return (
    <div className={clsx("flex flex-col gap-2", props.className)}>
      <label
        htmlFor={props.id}
        className="font-sans text-[11.5px] uppercase tracking-widest2 text-bone-50/60"
      >
        {props.label}
        {props.required && <span className="text-azure-300"> *</span>}
      </label>

      {props.as === "textarea" ? (
        <textarea
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          rows={props.rows ?? 5}
          aria-required={props.required}
          aria-invalid={hasError}
          aria-describedby={errorId}
          className={clsx(fieldBase, borderClass, "resize-none")}
        />
      ) : props.as === "select" ? (
        <div className="relative">
          <select
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            aria-required={props.required}
            aria-invalid={hasError}
            aria-describedby={errorId}
            className={clsx(fieldBase, borderClass, "appearance-none pr-10")}
          >
            <option value="" className="bg-azure-950">
              {props.placeholder ?? "Selecione"}
            </option>
            {props.options.map((option) => (
              <option key={option} value={option} className="bg-azure-950">
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            strokeWidth={1.5}
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bone-50/40"
          />
        </div>
      ) : (
        <input
          id={props.id}
          name={props.name}
          type={props.type ?? "text"}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          aria-required={props.required}
          aria-invalid={hasError}
          aria-describedby={errorId}
          className={clsx(fieldBase, borderClass)}
        />
      )}

      <p
        id={errorId}
        role="alert"
        className={clsx(
          "min-h-[16px] text-[12px] font-light text-[#ff9d9d] transition-opacity duration-300",
          hasError ? "opacity-100" : "opacity-0",
        )}
      >
        {props.error || " "}
      </p>
    </div>
  );
}
