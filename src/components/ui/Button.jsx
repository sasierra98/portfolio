import { Button as BaseButton } from "@nextui-org/react";

export const Button = (props) => {
  if (props.variant === "secondary") {
    return (
      <BaseButton
        className="text-sm border-red border-4 rounded-0 mb__5 mb__sm-0 px-[45px] py-[17px] font-bold btn__white shadow"
        type="button"
        style={{ borderColor: "#0E185F" }}
        {...props}
      >
        {props.children}
      </BaseButton>
    );
  }
  return (
    <button
      className="bg-white text-sm text-button rounded-0 mb__5 mb__sm-0 px-[45px] py-[17px] font-bold btn__white shadow"
      type="button"
      {...props}
    >
      {props.children}
    </button>
  );
};
