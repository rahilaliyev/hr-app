import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from 'src/context/userContext';

import { useGetCompanies } from 'src/api/companies';

import { FormControl, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import { LoaderOverlay, ModalComponent, PaginationComponent } from 'src/components';

import { COMPANY_ID } from 'src/constants';
import { ROUTES } from 'src/routes/const';

interface ICompanyModal {
  open: boolean;
  setOpen: (value: boolean) => void;
  disableClose?: boolean;
}

export const CompanyModal = ({ open, setOpen, disableClose = false }: ICompanyModal) => {
  const navigate = useNavigate();
  const { setCompany } = useContext(UserContext);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetCompanies(page);

  const handleClose = (_: unknown, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (disableClose) {
      if (reason !== 'backdropClick' && open) {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCompany((event.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    setOpen(false);
    localStorage.setItem(COMPANY_ID, selectedCompany);
    setCompany(selectedCompany);
    navigate(ROUTES.DEFAULT.PATH);
  };

  return (
    <ModalComponent
      open={open}
      onClose={handleClose}
      title="Şirkət seç"
      disableEscapeKeyDown={Boolean(disableClose)}
      onClickSubmitButton={handleSubmit}
    >
      <Stack flexDirection="column">
        <LoaderOverlay loading={isLoading} height={210}>
          {data?.data?.map((el) => (
            <FormControl key={el?.id}>
              <RadioGroup value={selectedCompany} onChange={handleChange}>
                <FormControlLabel value={el?.id} control={<Radio />} label={el?.name} />
              </RadioGroup>
            </FormControl>
          ))}
        </LoaderOverlay>

        <PaginationComponent page={page} setPage={setPage} count={data?.per_page} />
      </Stack>
    </ModalComponent>
  );
};
