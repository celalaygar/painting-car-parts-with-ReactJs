export const CarStatus = {
    PAINTED: "PAINTED",
    CHANGED: "CHANGED",
    LOCALLY_PAINTED: "LOCALLY_PAINTED",
    DEFECT_FREE: "DEFECT_FREE",
} as const;

export const CarColorStatus = {
    '#FF0000': "CHANGED",
    '#0080FF': "PAINTED",
    '#FFFF30': "LOCALLY_PAINTED",
    '#AABBAB': "DEFECT_FREE",
} as const;

export const CarColor = {
    CHANGED: "#FF0000",
    PAINTED: "#0080FF",
    LOCALLY_PAINTED: "#FFFF30",
    DEFECT_FREE: "#AABBAB",
} as const;

type CarStatusType = (typeof CarStatus)[keyof typeof CarStatus];


interface CarBodyPart {
    color: string;
    partChangeStatus: CarStatusType;
}

export const CarBodyPartsKeys = {
    FRONT: "FRONT",
    REAR: "REAR",
    RIGHT_FRONT_DOOR: "RIGHT_FRONT_DOOR",
    LEFT_FRONT_DOOR: "LEFT_FRONT_DOOR",
    RIGHT_REAR_DOOR: "RIGHT_REAR_DOOR",
    LEFT_REAR_DOOR: "LEFT_REAR_DOOR",
    ROOF: "ROOF",
    RIGHT_FRONT_FENDER: "RIGHT_FRONT_FENDER",
    LEFT_FRONT_FENDER: "LEFT_FRONT_FENDER",
    RIGHT_REAR_FENDER: "RIGHT_REAR_FENDER",
    LEFT_REAR_FENDER: "LEFT_REAR_FENDER",
    FRONT_BUMPER: "FRONT_BUMPER",
    REAR_BUMPER: "REAR_BUMPER",
} as const;



interface CarBodyPart {
    color: string | undefined;
    partChangeStatus: (typeof CarStatus)[keyof typeof CarStatus];
}


export type CarBodyParts = {
    [key in string ]: CarBodyPart;
}

export const carBodyParts: CarBodyParts = {
    FRONT: {
        color: undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    REAR: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    RIGHT_FRONT_DOOR: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    LEFT_FRONT_DOOR: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    RIGHT_REAR_DOOR: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    LEFT_REAR_DOOR: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    ROOF: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    RIGHT_FRONT_FENDER: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    LEFT_FRONT_FENDER: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    RIGHT_REAR_FENDER: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    LEFT_REAR_FENDER: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    FRONT_BUMPER: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
    REAR_BUMPER: {
        color:  undefined,
        partChangeStatus: CarStatus.DEFECT_FREE
    },
};
