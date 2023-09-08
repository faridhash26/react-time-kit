import React, { FC } from "react";
import Button from "../Button/Button";
import {
  MonthMapper,
  daysOfMonth,
  sinceYears,
} from "../wrapper/helper/convertor";

const ButtonGroup: FC<ButtonGroupProps> = ({
  buttonGroupClassName,
  daysValue,
  monthValue,
  yearValue,
  buttonClassName,
  calenderType,
  onChangeHandler,
}) => {
  return (
    <div
      className={
        buttonGroupClassName ? buttonGroupClassName : "Calender_button_group"
      }
    >
      <Button
        value={daysValue}
        onChange={onChangeHandler}
        className={buttonClassName}
        name="days"
        options={daysOfMonth().map((item) => {
          return { title: String(item), value: String(item) };
        })}
        title={calenderType === "jalali" ? "روز" : "day"}
      />
      <Button
        value={monthValue}
        onChange={onChangeHandler}
        className={buttonClassName}
        name="month"
        options={MonthMapper(calenderType)}
        title={calenderType === "jalali" ? "ماه" : "month"}
      />
      <Button
        value={yearValue}
        onChange={onChangeHandler}
        className={buttonClassName}
        name="year"
        options={sinceYears(50, calenderType).map((item) => {
          return { title: String(item), value: String(item) };
        })}
        title={calenderType === "jalali" ? "سال" : "year"}
      />
    </div>
  );
};

export default ButtonGroup;
