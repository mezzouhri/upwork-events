import DatePicker from "react-datepicker";
//import "../../../../public/styles/datepicker.css";

const Calendar = ({ selectedDate, setSelectedtDate }) => {
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };

  return (
    <div className="self-center">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedtDate(date)}
        inline
        filterDate={isWeekday}
        fixedHeight
      />
    </div>
  );
};

export default Calendar;
