import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { CarColor } from "./CarParts";

interface MyPopoverProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  position: { top: number; left: number };
  onColorChange: (color: string) => void;
  selectedColor: string; // Seçili rengin props olarak alınması
}

const MyPopover: React.FC<MyPopoverProps> = ({
  isOpen,
  onOpenChange,
  position,
  onColorChange,
  selectedColor,
}) => {
  const colors = [
    { color: CarColor.DEFECT_FREE, label: "Hatasız" },
    { color: CarColor.LOCALLY_PAINTED, label: "Lokal Boyalı" },
    { color: CarColor.PAINTED, label: "Boyalı" },
    { color: CarColor.CHANGED, label: "Değişmiş" },
  ];

  return (
    <Popover.Root open={isOpen} onOpenChange={onOpenChange}>
      <Popover.Trigger style={{ display: "none" }} />
      <Popover.Content
        className="bg-white border border-gray-300 p-4 rounded shadow-md"
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          zIndex: 10,
        }}
      >
        <Popover.Arrow className="fill-white" />

        {colors.map(({ color, label }) => (
          <div
          style={{minWidth: "130px"}}
            key={color}
            className={`flex items-center gap-x-1 mb-1 cursor-pointer ${
              selectedColor === color ? "font-semibold" : ""
            }`}
            onClick={() => onColorChange(color)}
          >
            <button className="m-1 rounded-full">
              <div
              className=""
                style={{
                  height: "25px",
                  width: "25px",
                  fontSize: '10px',
                  backgroundColor: color,
                  borderRadius: "15px",
                  border: selectedColor === color ? "3px solid black" : "none",
                }}
              />
            </button>
            <span>{label}</span>
          </div>
        ))}
      </Popover.Content>
    </Popover.Root>
  );
};

export default MyPopover;
