import { type ICompany } from '../companies/types';
import { type IUser } from '../users/types';

import { type ID } from 'src/ts/interface';

interface ICommonEmployeeStatus extends ID {
  created_at: string;
  label?: string;
  title?: string;
  name?: string;
  status?: boolean;
  description?: string;
  updated_at: string;
}

export interface IWorkerContract extends ID {
  company: ICompany;
  created_at: string;
  date_conclusion_contract: string;
  date_contract: string;
  employee: IEmployee;
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

export interface IEmployee extends ID {
  birthDate: string;
  birthPlace: string;
  certificates: string[];
  companies: ICompany[];
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
  user: IUser;
  work_experiences: string[];
  worker_contract: IWorkerContract[];
  workplace_infos: IWorkPlaceInfo[];
}

export interface IFamilyInfo extends ID {
  address: string;
  birth_date: string;
  contact_number: string;
  created_at: string;
  employee: IEmployee;
  family_member_type: ICommonEmployeeStatus;
  m_firstname: string;
  m_lastname: string;
  m_surname: string;
  sex: ICommonEmployeeStatus;
  status: boolean;
  updated_at: string;
}

export interface ICategory extends ID {
  code: string;
  company: ICompany;
  company_id: number;
  create_date: string;
  created_at: string;
  employee: IEmployee;
  employee_id: number;
  end_date: string;
  icon: string;
  label: string;
  name: string;
  parent: ICategory;
  parent_id: number;
  position_level: ICommonEmployeeStatus & { icon: string };
  position_level_id: number;
  structure_level: ICommonEmployeeStatus & { icon: string };
  structure_level_id: number;
  updated_at: string;
  work_status: ICommonEmployeeStatus | number;
}

export interface IMilitaryInfo extends ID {
  additional_information: string;
  category: ICategory;
  completion_date: string;
  created_at: string;
  employee: IEmployee;
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

export interface IEducationInfo extends ID {
  diplom_issue_date: string;
  diplom_seria_num: string;
  employee: IEmployee;
  end_date: string;
  faculty: string;
  insert_user: IUser;
  institution: ICommonEmployeeStatus;
  profession: string;
  qualification: ICommonEmployeeStatus;
  status: boolean;
  update_user: IUser;
}

export interface ICertificates extends ID {
  created_at: string;
  employee: IEmployee;
  given_date: string;
  insert_user: IUser;
  status: boolean;
  training_center_name: string;
  training_date: string;
  training_name: string;
  update_user: IUser;
  updated_at: string;
}

interface ITranslation extends ID {
  label: string;
  language_level_id: number;
  locale: string;
}

export interface ILanguageKnowledge extends ID {
  created_at: string;
  employee: IEmployee;
  insert_user: IUser;
  language: ICommonEmployeeStatus;
  language_reading: ICommonEmployeeStatus & ITranslation[];
  language_speaking: ICommonEmployeeStatus & ITranslation[];
  language_understanding: ICommonEmployeeStatus & ITranslation[];
  language_writing: ICommonEmployeeStatus & ITranslation[];
  status: boolean;
  update_user: IUser;
  updated_at: string;
}

export interface ISkill extends ID {
  created_at: string;
  employee: IEmployee;
  insert_user: IUser;
  skill_description: string;
  skill_name: string;
  status: boolean;
  update_user: IUser;
  updated_at: string;
}

export interface IDriverLicense extends ID {
  category: ICommonEmployeeStatus;
  created_at: string;
  employee: IEmployee;
  expire_date: string;
  insert_user: IUser;
  issue_date: string;
  license_issuer: string;
  license_serial_number: string;
  status: boolean;
  update_user: IUser;
  updated_at: string;
}

export interface IMigrationInfo extends ID {
  created_at: string;
  employee: IEmployee;
  insert_user: IUser;
  prp_issuer: string;
  prp_permit_date: string;
  prp_serial_number: string;
  prp_valid_date: string;
  status: boolean;
  trp_issuer: string;
  trp_permit_date: string;
  trp_permit_reason: string;
  trp_serial_number: string;
  trp_valid_date: string;
  update_user: IUser;
  updated_at: string;
  wp_permit_date: string;
  wp_serial_number: string;
  wp_valid_date: string;
}

export interface IMedicalInfo extends ID {
  created_at: string;
  deficiency_desc: string;
  employee: IEmployee;
  insert_user: IUser;
  last_renew_date: string;
  medical_app: ICommonEmployeeStatus;
  physical_deficiency: ICommonEmployeeStatus;
  renew_interval: number;
  update_user: IUser;
  updated_at: string;
}

export interface IPrevPosition extends ID {
  created_at: string;
  employee: IEmployee;
  end_date: string;
  insert_user: IUser;
  leave_reason: string;
  prev_employer: string;
  sector: string;
  start_date: string;
  status: boolean;
  update_user: IUser;
  updated_at: string;
}

export interface IWorkExperience extends ID {
  created_at: string;
  employee: IEmployee;
  general_work_experience: string;
  status: boolean;
  updated_at: string;
  work_experience_before_enterprise: string;
  work_experience_enterprise: string;
}
