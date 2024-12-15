import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCompanies, useGetRoleGroups } from 'src/api';
import { type IRoleGroups } from 'src/api/roleGroups/types';

import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { tableFields } from './fields';

import { ROUTES } from 'src/routes/const';

const RoleGroups = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line
  // @ts-expect-error
  const [selectedId, setSelectedId] = useState<number | null>(null);
  // eslint-disable-next-line
  // @ts-expect-error
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const { data = [] as IRoleGroups[], isLoading } = useGetRoleGroups();
  const { data: companies } = useGetCompanies(0);

  const handleNavigateDetail = (id: number) => {
    navigate(`${ROUTES.ROLES.PATH}/detail/${id}`);
  };

  const handleNavigateEdit = (id: number) => {
    navigate(`${ROUTES.ROLES.PATH}/edit/${id}`);
  };

  const handleDeleteModal = (id: number) => {
    setSelectedId(id);
    setIsDeleteModal(true);
  };

  return (
    <Stack width="100%" height="100%">
      <DataGrid
        columns={tableFields({
          companies: companies?.data,
          handleNavigateDetail,
          handleNavigateEdit,
          handleDeleteModal,
        })}
        rows={data}
        loading={isLoading}
        getRowHeight={() => 'auto'}
      />
    </Stack>
  );
};

export default RoleGroups;
