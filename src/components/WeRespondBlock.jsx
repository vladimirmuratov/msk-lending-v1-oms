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
                Мы отвечаем за:
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--main-color)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{ fontWeight: 600 }}>Быстрота решения вопросов:</Box>
                    <br />
                    Мы ценим ваше время: процесс вступления в стационар оптимизирован до минимума сроков.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--main-color)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{ fontWeight: 600 }}>Широкий спектр медицинских учреждений:</Box>
                    <br />
                    Компания тесно сотрудничает с передовыми клиниками и медицинскими центрами России, обеспечивая
                    разнообразие вариантов для выбора подходящего места лечения.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--main-color)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{ fontWeight: 600 }}>Персонализированный выбор:</Box>
                    <br />
                    Эксклюзивность каждого медицинского случая для нас – приоритет. Мы тщательно подбираем клинику,
                    специалистов и лечебные схемы исходя из ваших личных предпочтений и диагностических данных.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--main-color)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{ fontWeight: 600 }}>Постоянное присутствие:</Box>
                    <br />
                    От первой встречи с врачом до момента выписки – наша поддержка не оставляет вас ни на минуту.
                    Включая помощь в подготовке документов, логистику и адаптацию при пребывании в клинике.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--main-color)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    <Box component="span" sx={{ fontWeight: 600 }}>Открытость ценовой политики :</Box>
                    <br />
                    Прозрачность расчетов гарантируем: предоставляя полную информацию о стоимости услуг, мы помогаем вам
                    заранее спланировать бюджет и избежать скрытых платежей.
                </Typography>
            </Box>

        </Box>
    );
};
