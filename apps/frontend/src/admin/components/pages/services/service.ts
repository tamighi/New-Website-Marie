export interface ServiceDto {
  id: number;
  name: string;
  description: string;
}

export interface CreateServiceDto {
  name?: string;
  description?: string;
}
