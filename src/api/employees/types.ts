import { type ICompanies } from '../companies/types';
import { type IUsers } from '../users/types';

import { type ID } from 'src/ts/interface';

interface ICommonEmployeeStatus extends ID {
  created_at: string;
  label: string;
  updated_at: string;
}

interface IWorkerContract extends ID {
  company: string;
  created_at: string;
  date_conclusion_contract: string;
  date_contract: string;
  employee_start_date: string;
  indefinite: number;
  job_description: string;
  other_condition_wages: string;
  probation: number;
  probation_dates: number;
  quota: string;
  reasons_temporary_clause: string;
  regulation_property_relations: string;
  status: boolean;
  termination_cases: string;
  trial_expiration_date: string;
  updated_at: string;
  working_conditions: number;
  workplace_status: number;
}

interface IWorkPlaceInfo extends ID {
  code: string;
  company_id: number;
  create_date: string;
  created_at: string;
  employee_id: number;
  end_date: string;
  name: string;
  parent_id: string;
  position_level_id: string;
  structure_level_id: string;
  updated_at: string;
  work_status: string;
}

export interface IEmployees extends ID {
  birthDate: string;
  birthPlace: string;
  certificates: string[];
  companies: ICompanies[];
  created_at: string;
  driving_licenses: string[];
  education_infos: string[];
  email: string;
  emergency_contact: string;
  family_infos: string[];
  father_name: string;
  firstname: string;
  home_tel: string;
  image_name: string;
  language_knowledge: string[];
  lastname: string;
  living_address: string;
  marital_status: ICommonEmployeeStatus;
  medical_infos: string[];
  migration_infos: string[];
  military_infos: string[];
  mob_tel: string;
  nationality: ICommonEmployeeStatus;
  passport_date: string;
  passport_end_date: string;
  passport_given_authority: string;
  passport_serial_number: string;
  pincode: string;
  previous_workplaces: string[];
  reg_address: string;
  sex: ICommonEmployeeStatus;
  skills: string[];
  status: boolean;
  structure_roles: string[];
  updated_at: string;
  user: IUsers;
  work_experiences: string[];
  worker_contract: IWorkerContract[];
  workplace_infos: IWorkPlaceInfo[];
}
