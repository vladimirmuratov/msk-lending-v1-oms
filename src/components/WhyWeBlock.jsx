import { Box, Typography } from '@mui/material';

export const WhyWeBlock = () => {
    return (
        <Box
            component="section"
            id="whyWe"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{
                            color: 'var(--main-color)',
                            marginBottom: '20px',
                            fontSize: { xs: '28px', sm: '34px' },
                            fontWeight: 500
                        }}>
                Почему именно мы?
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                Мы организуем госпитализацию в любые <Box component="span"
                                                          sx={{ color: 'var(--red)', fontWeight: 600 }}>клиники Москвы и
                области</Box>, включая подбор оптимальной программы
                лечения и расчёт стоимости палат.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>При отказе в других медицинских
                    учреждениях</Box> мы берём на себя решение вопроса. Особое внимание уделяем
                стационарному <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>лечению пожилых
                пациентов</Box>, обеспечивая круглосуточное сопровождение.
            </Typography>
        </Box>
    );
};
