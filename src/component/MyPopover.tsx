import React from 'react';
import * as Popover from '@radix-ui/react-popover';

interface MyPopoverProps {
    globalColor: string; // Eklenen globalColor prop'u
    setGlobalColor: React.Dispatch<React.SetStateAction<string>>;
}

const MyPopover: React.FC<MyPopoverProps> = ({ globalColor, setGlobalColor }) => {
    return (
        <div >

            <Popover.Root>
                <Popover.Trigger className="p-2 bg-blue-500 text-white rounded">Open Popover</Popover.Trigger>
                <Popover.Content className="bg-white border border-gray-300 p-4 rounded shadow-md">
                    <Popover.Arrow className="fill-white" />
                    <button
                        onClick={() => setGlobalColor("#AA2211")}
                        className="mt-2 text-blue-500"
                    >
                        <div
                            style={{
                                height: "25px",
                                width: "25px",
                                backgroundColor: "#AA2211",
                                borderRadius: "15px"
                            }}>
                        </div>
                    </button>
                    <p></p>
                    <button
                        onClick={() => setGlobalColor("#EDCA11")}
                        className="mt-2 text-blue-500"
                    >
                        <div
                            style={{
                                height: "25px",
                                width: "25px",
                                backgroundColor: "#EDCA11",
                                borderRadius: "15px"
                            }}>
                        </div>
                    </button>
                    <p></p>
                    <button
                        onClick={() => setGlobalColor("#1122AA")}
                        className="mt-2 text-blue-500"
                    >
                        <div
                            style={{
                                height: "25px",
                                width: "25px",
                                backgroundColor: "#1122AA",
                                borderRadius: "15px"
                            }}>
                        </div>
                    </button>
                    <p></p>
                    <button
                        onClick={() => setGlobalColor("#C27A1E")}
                        className="mt-2 text-blue-500"
                    >
                        <div
                            style={{
                                height: "25px",
                                width: "25px",
                                backgroundColor: "#C27A1E",
                                borderRadius: "15px"
                            }}>
                        </div>
                    </button>
                    <p></p>
                    <Popover.Close className="mt-2 text-blue-500">Close</Popover.Close>
                </Popover.Content>
            </Popover.Root>
        </div>
    );
};

export default MyPopover;
