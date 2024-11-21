export const CarStatus = {
    PAINTED: "PAINTED",
    CHANGED: "CHANGED",
    LOCALLY_PAINTED: "LOCALLY_PAINTED",
    DEFECT_FREE: "DEFECT_FREE",
} as const;

export const CarColorStatus = {
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

interface CarBodyParts {
    [key: string]: CarBodyPart;
}

export let carBodyParts: CarBodyParts = {
    "FRONT": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "REAR": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "RIGHT_FRONT_DOOR": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "LETF_FRONT_DOOR": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "RIGHT_REAR_DOOR": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "LETF_REAR_DOOR": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "ROOF": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "RIGHT_FRONT_FENDER": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "LEFT_FRONT_FENDER": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "RIGHT_REAR_FENDER": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "LEFT_REAR_FENDER": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "FRONT_BUMPER": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
    "REAR_BUMPER": { color: CarColorStatus.DEFECT_FREE, partChangeStatus: CarStatus.DEFECT_FREE },
};
