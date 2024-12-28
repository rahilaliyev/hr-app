import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import {
  type ICategory,
  type ICertificates,
  type IDriverLicense,
  type IEducationInfo,
  type IEmployee,
  type IFamilyInfo,
  type ILanguageKnowledge,
  type IMedicalInfo,
  type IMigrationInfo,
  type IMilitaryInfo,
  type IPrevPosition,
  type ISkill,
  type IWorkerContract,
  type IWorkExperience,
} from './types';

export const useGetEmployees = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.EMPLOYEE],
    queryFn: async () => {
      const res = await api.get<IEmployee[]>('/employees');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeFamilyInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.FAMILY_INFO],
    queryFn: async () => {
      const res = await api.get<IFamilyInfo[]>('/family-infos');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeMilitaryInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.MILITARY_INFO],
    queryFn: async () => {
      const res = await api.get<IMilitaryInfo[]>('/military-infos');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeWorkerContracts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.WORKER_CONTRACTS],
    queryFn: async () => {
      const res = await api.get<IWorkerContract[]>('/worker-contracts');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeWorkPlaces = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.WORK_PLACES],
    queryFn: async () => {
      const res = await api.get<ICategory[]>('/categories');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeCertificates = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.CERTIFICATES],
    queryFn: async () => {
      const res = await api.get<ICertificates[]>('/certificates');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeEducationInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.EDUCATION_INFO],
    queryFn: async () => {
      const res = await api.get<IEducationInfo[]>('/education-infos');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeLanguageKnowledge = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.LANGUAGE_KNOWLEDGE],
    queryFn: async () => {
      const res = await api.get<ILanguageKnowledge[]>('/language-knowledges');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeSkills = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.SKILLS],
    queryFn: async () => {
      const res = await api.get<ISkill[]>('/skills');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeDriverLicenses = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.DRIVER_LICENSE],
    queryFn: async () => {
      const res = await api.get<IDriverLicense[]>('/driver-licenses');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeMigrationInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.MIGRATION_INFO],
    queryFn: async () => {
      const res = await api.get<IMigrationInfo[]>('/migration-infos');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeMedicalInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.MEDICAL_INFO],
    queryFn: async () => {
      const res = await api.get<IMedicalInfo[]>('/medical-infos');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeePreviousPosition = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.PREVIOUS_POSITION],
    queryFn: async () => {
      const res = await api.get<IPrevPosition[]>('/employee-prev-positions');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetEmployeeWorkExperience = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES.WORK_EXPERIENCE],
    queryFn: async () => {
      const res = await api.get<IWorkExperience[]>('/workExperiences');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/employees/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.EMPLOYEE],
      });
    },
  });
};

export const useDeleteEmployeeFamilyInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/family-infos/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.FAMILY_INFO],
      });
    },
  });
};

export const useDeleteEmployeeMilitaryInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/military-infos/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.MILITARY_INFO],
      });
    },
  });
};

export const useDeleteEmployeeWorkerContract = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/worker-contracts/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.WORKER_CONTRACTS],
      });
    },
  });
};

export const useDeleteEmployeeWorkPlace = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/categories/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.WORK_PLACES],
      });
    },
  });
};

export const useDeleteEmployeeEducationInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/education-infos/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.EDUCATION_INFO],
      });
    },
  });
};

export const useDeleteEmployeeCertificate = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/certificates/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.CERTIFICATES],
      });
    },
  });
};

export const useDeleteEmployeeLanguageKnowledge = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/language-knowledges/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.LANGUAGE_KNOWLEDGE],
      });
    },
  });
};

export const useDeleteEmployeeSkill = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/skills/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.SKILLS],
      });
    },
  });
};

export const useDeleteEmployeeDriverLicense = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/driver-licenses/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.DRIVER_LICENSE],
      });
    },
  });
};

export const useDeleteEmployeeMigrationInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/migration-infos/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.MIGRATION_INFO],
      });
    },
  });
};

export const useDeleteEmployeeMedicalInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/medical-infos/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.MEDICAL_INFO],
      });
    },
  });
};

export const useDeleteEmployeePreviousPosition = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/employee-prev-positions/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.PREVIOUS_POSITION],
      });
    },
  });
};

export const useDeleteEmployeeWorkExperience = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/workExperiences/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES.WORK_EXPERIENCE],
      });
    },
  });
};
