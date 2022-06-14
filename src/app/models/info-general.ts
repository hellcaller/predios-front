import { InfoFiscal } from './info-fiscal';
import { InfoCatastral } from './info-catastral';
import { Localizacion } from './localizacion';
import { EstudiosyConceptos } from './estudiosyConceptos';
import { Tecnica } from './tecnica';

export class InfoGeneral {
	id: number;
	tipo_bien: string;
	chip: string;
	destinacion: string;
	tipo_activo: string;
	estado: string;
	adquisicion: string;
	forma_adquisicion: string;
	proyecto_sda: string;
	convenio_adquisicion: string;
	declaratoria_publica: string;
	nombre_predio: string;
	numero_especifico: string;
	informacion_fiscal: InfoFiscal[] = [];
	localizacion: Localizacion[] = [];
	informacion_catastral: InfoCatastral[] = [];
  estudios_y_conceptos: EstudiosyConceptos[] = [];
  tecnica: Tecnica[] = [];
}
