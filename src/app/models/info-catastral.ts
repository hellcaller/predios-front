import { Propiedad } from './propiedad';

export class InfoCatastral {
	id: number;
	sector_catastral: string;
	codigo_catastral: string;
	direccion_catastral: string;
	chip: string;
	cedula_catastral: string;
	dest_catastral: string;
	propiedad: Propiedad[] = [];
}
