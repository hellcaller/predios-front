import { InfoGeneral } from './info-general';


export class Adquisicion {
	id: number;
	oferta: string;
	fechaoferta: Date;
	oficionot: string;
	fechanot: Date;
	fechaacepoferta: Date;
	fechainscripcionoferta: Date;
	fechaoficioinscripcionofer: Date;
	oficioinscripcion: string;
	fechacancelacionoferta: Date;
	anexodoc: string;
    observaciones: string;
	informacion_general: InfoGeneral[] = [];
}
