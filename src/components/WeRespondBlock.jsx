import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const WeRespondBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{color: 'var(--main-color)', marginBottom: '20px', fontSize: { xs: '28px', sm: '34px' }, fontWeight: 500 }}>
                Мы обеспечиваем:
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Оперативную госпитализацию:</Box>
                    <br />
                    Минимальные сроки оформления.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{color: 'var(--red)', fontWeight: 600 }}>Доступ к ведущим клиникам:</Box>
                    <br />
                    Широкий выбор медицинских учреждений.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{color: 'var(--red)', fontWeight: 600 }}>Персонализированный подход:</Box>
                    <br />
                    Подбор клиники, врачей и лечения по вашим данным.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{color: 'var(--red)', fontWeight: 600 }}>Полное сопровождение:</Box>
                    <br />
                    Помощь с документами, логистикой и адаптацией.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{color: 'var(--red)', fontWeight: 600 }}>Прозрачность цен:</Box>
                    <br />
                    Точные расчёты без скрытых платежей.
                </Typography>
            </Box>

        </Box>
    );
};
