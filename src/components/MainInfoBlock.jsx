import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
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

            <Typography
                variant="h2"
                sx={{
                    color: 'var(--main-color)',
                    marginBottom: '20px',
                    fontSize: { xs: '22px', sm: '34px' },
                    fontWeight: 500
                }}>
                Забота без ожиданий: качественная госпитализация без полиса ОМС
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Медицинская Сервисная
                    Компания (МСК)</Box> обеспечивает качественное медицинское обслуживание для жителей Москвы, регионов
                России и стран
                СНГ. Мы организуем быструю и безопасную госпитализацию без задержек.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Наши специалисты сопровождают пациентов с момента прибытия в город: встречаем на вокзале или в
                аэропорту, предоставляем медицинский транспорт до профильной клиники.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Предлагаем платную госпитализацию, включая варианты <Box component="span"
                                                                         sx={{ color: 'var(--red)', fontWeight: 600 }}>без
                полиса ОМС</Box>. Оказываем медицинскую помощь
                оперативно, без ожидания и очередей. Наши врачи обеспечивают комфортное и эффективное лечение.
                <br />
                <br />
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Круглосуточно. Оперативно.
                    Доступно</Box>
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Профессиональный коллектив
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Врачи, медсёстры и специалисты с высоким уровнем подготовки, регулярно повышающие квалификацию.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Современное оснащение
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Диагностика и лечение на аппаратуре последнего поколения, соответствующей международным стандартам.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Индивидуализированный подход
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Лечение с учётом особенностей здоровья пациента.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Комфортные условия
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Современные палаты с удобствами для быстрого восстановления.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Полный медицинский цикл
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    От приёма до реабилитации и контроля состояния.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Поддержка при госпитализации
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Организация приезда, транспортировки и сопровождения из любого региона.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Прозрачность цен
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Чёткая система оплаты и понятные условия.
                </Typography>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Медицинская Сервисная
                    Компания – надежный выбор для здоровья. Мы рядом 24/7.</Box>
            </Typography>
        </Box>
    );
};
