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
                        sx={{color: 'var(--main-color)', marginBottom: '20px', fontSize: { xs: '22px', sm: '34px' }, fontWeight: 500 }}>
                Забота без ожиданий: качественная госпитализация без полиса ОМС
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                В <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> с радушием открывают двери для каждого,
                кто ценит качество и комфорт в медицине. Мы
                обеспечиваем высочайший уровень здравоохранения как для жителей Москвы, так и пациентов из России и
                стран СНГ. Ваше здоровье – наш главный приоритет; госпитализация у нас проходит без задержек, с акцентом
                на безопасность.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> берет на себя организацию транспортировки
                в клиники специализированного профиля из любого
                уголка России и СНГ. Встречаем иногородних пациентов прямо на вокзале или в аэропорту, включая
                сопровождение бригады скорой помощи.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Забота о здоровье без ограничений: мы предлагаем платную госпитализацию (в том числе без полиса ОМС). Вам
                гарантирована оперативная и профессиональная медицинская помощь по первому требованию – минуя длинные
                очереди и неопределенность сроков лечения. Здесь вас ждут внимательные лучшие специалисты, обеспечивая
                комфортное пребывание на пути к выздоровлению. Ваше благополучие – наш непременный долг!
                <br />
                <br />
                <Box component="span" sx={{color: 'var(--main-color)', fontWeight: 600 }}>Круглосуточно. Оперативно. Доступно</Box>
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Профессиональный коллектив
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Наш медицинский персонал состоит из высококлассных экспертов – докторов, сестринского состава и
                    других специалистов, непрерывно совершенствующих свои навыки через обучение по передовым стандартам
                    страны.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Современное оснащение
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Аппаратура новейшего поколения, соответствующая международным критериям: диагностика и лечение с
                    максимальной точностью для вашего блага.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Индивидуализированный подход
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Каждому пациенту – персонализированная стратегия лечения, учитывающая его особенности здоровья. Ваш
                    комфорт и исцеление – в центре внимания.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Уютные условия пребывания
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Создаем идеальную атмосферу: современные палаты с полным набором удобств для вашего скорейшего
                    восстановления.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Полный медицинский цикл
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    От поступления до выписки – комплексная забота, включая реабилитацию и последующий контроль. Мы
                    всегда рядом.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Поддержка в госпитализации
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Организуем приезд из любой точки России или СНГ: консультации, транспортировку, сопровождение для
                    безупречного начала лечения.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Прозрачность финансов
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Четкая система оплаты и открытые разговоры о стоимости – ваша уверенность в планировании бюджета на
                    здоровье.
                </Typography>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Выбирайте <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box>: надежный спутник к долголетию.
                Мы заботимся 24/7, обеспечивая непрерывную поддержку
                и качество жизни для каждого пациента без исключения.
            </Typography>
        </Box>
    );
};
