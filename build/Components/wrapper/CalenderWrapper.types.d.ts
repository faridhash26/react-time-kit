/// <reference types="react" />
interface CalenderWrapperProps {
    title: string;
    isRequired?: boolean;
    calenderType: "jalali" | "default";
    buttonGroupClassName?: string;
    buttonClassName?: string;
    daysValue?: string;
    monthValue?: string;
    yearValue?: string;
    onChangeCalender?: (event: React.FormEvent<HTMLSelectElement>) => void;
}
