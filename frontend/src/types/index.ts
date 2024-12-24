export interface SoilType {
    id: string;
    name: string;
    description?: string;
}

export interface CropType {
    id: number;
    name: string;
    description?: string;
}

export interface Recommendation {
    product: string;
    description: string;
    dosage: string;
}

export interface YieldData {
    current: number;
    potential: number;
}

export interface FormData {
    soilType: string;
    cropType: string;
} 