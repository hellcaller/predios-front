import { InfoGeneral } from './info-general';


export class EstudiosyConceptos {
	id: number;
	estudiotitulos: string;
    elaboradopor: string;
	fecharealizacion: Date;    
	limitacion: string;	
	descripcion: string;
	versiondoc: string;
	anexos: string;
	informacion_general: InfoGeneral[] = [];
}
