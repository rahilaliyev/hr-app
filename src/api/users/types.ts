import { type TFormValues } from 'src/pages/UserPage/UserAddEditPage/components/validationSchema';

import { type ICompany } from '../companies/types';
import { type IRoleGroup } from '../roleGroups/types';
import { type IRole } from '../roles/types';

import { type ID } from 'src/ts/interface';

interface IEmployee extends ID {
  birthdate: string;
  birtplace: string;
  created_at: string;
  email: string;
  emergency_contact: string;
  father_name: string;
  firstname: string;
  home_tel: string;
  lastname: string;
  living_address: string;
  marital_status_id: number;
  mob_tel: string;
  nationality_id: number;
  passport_date: string;
  passport_end_date: string;
  passport_given_authority: string;
  passport_serial_number: string;
  pinCode: string;
  reg_address: string;
  sex_id: number;
  status: boolean;
  updated_at: string;
}

export interface IUser extends ID {
  companies: ICompany[];
  created_at: string;
  email: string;
  email_verified_at: string;
  employee: IEmployee;
  employee_id: number;
  firstname: string;
  language_id: number;
  lastname: string;
  status: boolean;
  updated_at: string;
  username: string;
  permission: string[];
  roleGroups: IRoleGroup[];
  roles: IRole;
}

export interface IUpdateUserPayload {
  id: string;
  body: TFormValues;
}
