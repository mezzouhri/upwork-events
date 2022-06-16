import DatePicker from "react-datepicker";

const Calendar = ({ selectedDate, setSelectedtDate }) => {
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedtDate(date)}
      inline
      filterDate={isWeekday}
      fixedHeight
    />
  );
};

export default Calendar;
