interface ButtonGroupProps {
  buttonGroupClassName?: string;
  daysValue?: string;
  monthValue?: string;
  yearValue?: string;
  buttonClassName?: string;
  calenderType: "jalali" | "default";

  onChangeHandler?: (event: React.FormEvent<HTMLSelectElement>) => void;
}
