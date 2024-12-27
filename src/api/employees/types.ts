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

export interface IFamilyInfo extends ID {
  address: string;
  birth_date: string;
  contact_number: string;
  created_at: string;
  employee: IEmployees;
  family_member_type: ICommonEmployeeStatus;
  m_firstname: string;
  m_lastname: string;
  m_surname: string;
  sex: ICommonEmployeeStatus;
  status: boolean;
  updated_at: string;
}

interface ICategory extends ID {
  code: string;
  company: ICompanies;
  create_date: string;
  created_at: string;
  employee: IEmployees;
  end_date: string;
  icon: string;
  label: string;
  parent: null;
  position_level: ICommonEmployeeStatus & { icon: string };
  structure_level: ICommonEmployeeStatus & { icon: string };
  updated_at: string;
  work_status: ICommonEmployeeStatus;
}

export interface IMilitaryInfo extends ID {
  additional_information: string;
  category: ICategory;
  completion_date: string;
  created_at: string;
  employee: IEmployees;
  fitness_service: string;
  general: string;
  group: ICommonEmployeeStatus;
  no_official: string;
  rank: ICommonEmployeeStatus;
  registration_date: string;
  registration_service: string;
  special: string;
  specialty_acc: string;
  staff: ICommonEmployeeStatus;
  status: boolean;
  updated_at: string;
}
