import { UserModel } from './user.model';
import { USER_MODEL_PROVIDER, DB_PROVIDER, SOLICITUD_MODEL_PROVIDER, TIPO_SOLICITUD_MODEL_PROVIDER, ROLES_MODEL_PROVIDER } from '@constants';
import { RolesModel } from './rol.model';


export const userProviders = [{
  provide: USER_MODEL_PROVIDER,
  useValue: UserModel,
  inject: [DB_PROVIDER]
}];

/* export const solicitudProviders = [{
  provide: SOLICITUD_MODEL_PROVIDER,
  useValue: SolicitudModel,
  inject: [DB_PROVIDER]
}];

export const tiposolicitudProviders = [{
  provide: TIPO_SOLICITUD_MODEL_PROVIDER,
  useValue: TipoSolicitudModel,
  inject: [DB_PROVIDER]
}]; */

export const rolesProviders =[{
  provide: ROLES_MODEL_PROVIDER,
  useValue: RolesModel,
  inject: [DB_PROVIDER]
}];