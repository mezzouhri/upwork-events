import DatePicker from "react-datepicker";

const Calendar = ({ selectedDate, setSelectedtDate }) => {
  return (
    <DatePicker
      className=" bg-white text-xl opacity-50 "
      selected={selectedDate}
      onChange={(date) => setSelectedtDate(date)}
      inline
    />
  );
};

export default Calendar;
