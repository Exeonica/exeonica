import { Button } from "@/components/index";

const CategoryButton = ({ label, value, selectedCategory, onClick }) => {
  const isActive = selectedCategory === value;

  return (
    <Button className={`rounded-full px-[16px] py-[10px] ${isActive ? "bg-primary text-white" : "gap-7 border-[1px] border-color-1 text-[16px] text-text"}`} onClick={() => onClick(value)}>
      {label}
    </Button>
  );
};

export default CategoryButton;
