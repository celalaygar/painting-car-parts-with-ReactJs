import React from 'react';
import * as Popover from '@radix-ui/react-popover';

interface MyPopoverProps {
    setSvgFillColor: (newValues: string[]) => void;
    svgIndex: number;
    svgFillColor: string[];
}

const MyPopover: React.FC<MyPopoverProps> = ({ setSvgFillColor, svgIndex, svgFillColor }) => {

    const handleColorChange = (color: string) => {
        let updatedColors = [...(svgFillColor || [])];
        if (updatedColors === undefined) {
            updatedColors = [];
        }
        if (updatedColors[svgIndex] == null) {
            updatedColors[svgIndex] = "";
        }
        updatedColors[svgIndex] = color; // belirtilen index'teki rengi güncelle
        setSvgFillColor(updatedColors); // yeni renk dizisini ayarla
        console.log(updatedColors)
        console.log(color)
        console.log(svgIndex)
    };

    return (
        <div className='shadow-xl'>
            <Popover.Root>
                <Popover.Trigger className="p-2 bg-blue-500 text-white rounded">
                    <div
                        style={{
                            height: "25px",
                            width: "25px",
                            backgroundColor: "white",
                            borderRadius: "15px"
                        }}
                    />
                </Popover.Trigger>

                <Popover.Content className="bg-white border border-gray-300 p-4 rounded shadow-md">
                    <Popover.Arrow className="fill-white" />

                    {/* Hatasız */}
                    <div className="flex items-center gap-x-1 mb-1">
                        <button
                            onClick={() => handleColorChange("#CCCCCC")}
                            className="p-2 rounded-full"
                        >
                            <div
                                style={{
                                    height: "25px",
                                    width: "25px",
                                    backgroundColor: "#CCCCCC",
                                    borderRadius: "15px"
                                }}
                            />
                        </button>
                        <span>Hatasız</span>
                    </div>

                    {/* Lokal Boyalı */}
                    <div className="flex items-center gap-x-1 mb-1">
                        <button
                            onClick={() => handleColorChange("#FFFF30")}
                            className="p-2 rounded-full"
                        >
                            <div
                                style={{
                                    height: "25px",
                                    width: "25px",
                                    backgroundColor: "#FFFF30",
                                    borderRadius: "15px"
                                }}
                            />
                        </button>
                        <span>Lokal Boyalı</span>
                    </div>

                    {/* Boyalı */}
                    <div className="flex items-center gap-x-1 mb-1">
                        <button
                            onClick={() => handleColorChange("#0080FF")}
                            className="p-2 rounded-full"
                        >
                            <div
                                style={{
                                    height: "25px",
                                    width: "25px",
                                    backgroundColor: "#0080FF",
                                    borderRadius: "15px"
                                }}
                            />
                        </button>
                        <span>Boyalı</span>
                    </div>

                    {/* Değişmiş */}
                    <div className="flex items-center gap-x-1 mb-1">
                        <button
                            onClick={() => handleColorChange("#FF0000")}
                            className="p-2 rounded-full"
                        >
                            <div
                                style={{
                                    height: "25px",
                                    width: "25px",
                                    backgroundColor: "#FF0000",
                                    borderRadius: "15px"
                                }}
                            />
                        </button>
                        <span>Değişmiş</span>
                    </div>

                    <Popover.Close className="mt-2 text-blue-500">Close</Popover.Close>
                </Popover.Content>
            </Popover.Root>
        </div>
    );
};

export default MyPopover;
