import React from "react";
import * as Popover from "@radix-ui/react-popover";

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
    { color: "#AABBAB", label: "Hatasız" },
    { color: "#FFFF30", label: "Lokal Boyalı" },
    { color: "#0080FF", label: "Boyalı" },
    { color: "#FF0000", label: "Değişmiş" },
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
          style={{minWidth: "200px"}}
            key={color}
            className={`flex items-center gap-x-1 mb-1 cursor-pointer ${
              selectedColor === color ? "font-black" : ""
            }`}
            onClick={() => onColorChange(color)}
          >
            <button className="p-2 rounded-full">
              <div
                style={{
                  height: "25px",
                  width: "25px",
                  backgroundColor: color,
                  borderRadius: "15px",
                  border: selectedColor === color ? "2px solid black" : "none",
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
