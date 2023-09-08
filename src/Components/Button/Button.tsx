import React, { FC } from "react";

const Button: FC<SelectButtonProps> = ({ title, options, name, ...props }) => {
  return (
    <div>
      <select name={name} {...props} defaultValue={title}>
        <option disabled value={title} hidden>
          {title}
        </option>
        {options?.map((item) => (
          <option value={item.value} key={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Button;
