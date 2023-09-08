import React, { FC } from "react";

import "./CalenderWrapper.style.css";

import CalenderIcon from "../../assets/icons/CalenderIcon";

import ButtonGroup from "../ButtonGroup/ButtonGroup";

const CalenderWrapper: FC<CalenderWrapperProps> = ({
  calenderType,
  title,
  isRequired,
  buttonGroupClassName,
  buttonClassName,
  daysValue,
  monthValue,
  yearValue,
  onChangeCalender,
}) => {
  const onChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    onChangeCalender && onChangeCalender(event);
  };
  return (
    <div className="CalenderWrapper" dir="rtl">
      <div className="CalenderWrapper_header">
        <div className="CalenderWrapper_icon ">
          <CalenderIcon />
        </div>
        <div className="CalenderWrapper_header_title">
          {title}
          {isRequired && <span>*</span>}
        </div>
      </div>
      <ButtonGroup
        buttonClassName={buttonClassName}
        calenderType={calenderType}
        buttonGroupClassName={buttonGroupClassName}
        daysValue={daysValue}
        monthValue={monthValue}
        yearValue={yearValue}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
};
CalenderWrapper.defaultProps = {
  calenderType: "default",
};
export default CalenderWrapper;
