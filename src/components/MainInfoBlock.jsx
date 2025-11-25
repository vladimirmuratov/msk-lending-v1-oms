import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: { xs: '10px', sm: 0 },
                color: 'var(--main-color)'
            }}
        >

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    Если вдруг оказывается, что у человека <Box component="span" sx={{ color: 'var(--red)' }}>нет полиса
                    ОМС</Box>, попасть в хорошую московскую клинику — задача
                    сродни квесту на выживание. Но, честно говоря, иногда времени на бюрократию просто нет: болезнь
                    может поджимать, состояние требует немедленной госпитализации, а все разговоры о "бумажках"
                    раздражают не хуже самой болезни. Тут как раз и начинается наша работа.
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    В <Box component="span" sx={{ color: 'var(--red)' }}>МСК-Групп</Box> мы помогаем людям устроиться в
                    федеральные центры, ведомственные больницы или частные
                    топ-клиники Москвы — и всё это абсолютно официально, без лишних проволочек и ожиданий. Нет ОМС? Не
                    беда: мы подключаем свои каналы, узнаём о свободных местах (знаете, как сложно иногда дозвониться
                    даже до регистратуры? ), берем на себя бумажную волокиту и согласовываем консультации у нужных
                    специалистов.
                </Typography>

                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Короче говоря, если нужно госпитализироваться быстро и без головной боли с документами — берём этот
                    вопрос на себя. Иногда удаётся организовать всё за один день — чтобы вы или ваши близкие не тратили
                    время на пустые разговоры и беготню по инстанциям.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >

                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '35px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Почему к нам действительно обращаются
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                            Мы находим выход даже тогда, когда кажется, что мест уже нет
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Это типичная ситуация: пациенту срочно требуется стационар, а больница молчит — всё занято.
                        Знаете, сколько раз нам удавалось оформить человека в клинику даже в момент самого большого
                        наплыва? Счёт идёт на десятки каждую неделю. У нас есть свой подход к подбору клиники и
                        оформлению госпитализации — очереди и «позвоните попозже» останутся где-то на задворках.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                            Не смотрим на прописку или полис ОМС
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Если вы гражданин России, из ближнего зарубежья, приехали учиться или работать — нам всё равно
                        важнее ваше состояние, чем бумажки и штампы. Полиса ОМС нет? Регистрация не московская? Для нас
                        это просто технические детали, которыми мы занимаемся сами.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                            Доступ ко всем специализированным отделениям — без лишней бюрократии
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Не надо блуждать по звонкам в поисках “той самой” клиники. Мы работаем с ведущими отделениями
                        хирургии, терапии, кардиологии, неврологии… да практически со всеми профилями. Например, только
                        за последнюю неделю к нам поступали пациенты и с травмами опорно-двигательного аппарата, и с
                        онкологией — для каждого мы нашли оптимальный путь.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                            Экстренные ситуации и плановые госпитализации — обе задачи для нас решаемы
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Попал человек в аварию или внезапно стало хуже после операции — мы готовы подключиться хоть
                        ночью. А если нужно решить вопрос с госпитализацией для проведения обследований или
                        запланированного курса лечения — наш подход остаётся такой же человеческий: быстро, внимательно
                        и по существу.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '35px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                            Помогаем перевестись туда, где помогут лучше
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Когда локальная больница разводит руками и ресурсы на исходе — мы берём организацию перевода в
                        ведущий московский стационар под ключ. Бывает же так: нужен узкий специалист или технологии,
                        которых “рядом” просто нет. Вот тут наш опыт приходит как нельзя кстати — переводим без
                        промедления и нервотрёпки.
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontSize: { xs: 18, sm: 20 },
                        borderLeft: '2px solid var(--main-color)',
                        paddingLeft: '25px'
                    }}
                >
                    В общем, если коротко — берёмся за ситуации сложнее средней полосы российской медицины и доводим
                    дело до реального результата для человека, а не галочки во внутреннем отчёте.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '35px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Вот как это обычно работает
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Сначала короткий звонок или заявка на сайте</Box>.
                    Мы не просто бронируем место — сперва выясняем детали:
                    что случилось, нужно ли срочно, какие есть просьбы или опасения. Иногда именно с этих нескольких
                    минут разговора многое становится понятнее (и часто люди сами говорят: "Оказывается, всё не так
                    страшно").
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Дальше подключается подбор клиники</Box>. Здесь
                    никакой лотереи — ищем вариант, который подходит именно по
                    вашему диагнозу и текущей ситуации. Направление болезни — это одна история, но мы еще смотрим: где
                    сейчас есть место в отделении, у кого из специалистов нужный опыт. Это экономит время и снижает
                    стресс — никто не ждет уточнений неделями.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>По документам тоже не бросаем одних</Box>. Чаще
                    всего нужны только паспорт, свежие анализы и медицинская
                    выписка — если что-то забыли или запутались в бумагах, поможем всё собрать до кучи.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    Ну и сам <Box component="span" sx={{ color: 'var(--red)' }}>процесс госпитализации</Box> — тут
                    задача сделать всё максимально быстро: организовать приезд в
                    стационар (или разместить туда родственника), обеспечить диагностику без хождения по кругу и
                    назначить лечение сразу под присмотром грамотных специалистов. В итоге вместо длинного стресса
                    человек попадает прямо "в руки" к тем, кто знает своё дело — начиная с первой минуты в больнице.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '35px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Кому подходит платная госпитализация без ОМС
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Платная госпитализация без ОМС</Box> — та самая
                    опция для тех, кто оказался вне стандартных маршрутов
                    системы. Ну вот, например, у вас нет московского полиса (или вы вообще приехали из другой страны в
                    гости — и вдруг случилась острая необходимость лечь в больницу). Для граждан других государств,
                    гостей России или просто тех, кому не светит бесплатное койко-место по ОМС, платное размещение
                    становится чуть ли не единственным выходом.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    Бывают ситуации, когда время — буквально жизнь. <Box component="span" sx={{ color: 'var(--red)' }}>Срочно
                    нужна госпитализация</Box>, а больница по месту
                    прописки разводит руками: мест нет или очередь "на потом". В подобных случаях возможность оплатить
                    стационар на платной основе — как запасной парашют: да, недешево, но зато быстро оказываешься под
                    наблюдением врачей там, где нужно.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '35px' }}>
                    Иногда дело вовсе не в срочности. Просто <Box component="span" sx={{ color: 'var(--red)' }}>профильный
                    центр находится не по соседству</Box>, и организовать
                    туда перевод бесплатно невозможно (ОМС не покрывает направление вне вашей больничной “территории”).
                    Или же нужно сложное — высокотехнологичное лечение, уровень которого бывает только в избранных
                    клиниках. Платная госпитализация здесь — это как возможность сыграть вне очереди и попасть к нужным
                    специалистам тогда, когда это больше всего требуется.
                </Typography>
                <Typography
                    sx={{ fontSize: { xs: 18, sm: 20 }, borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                    В общем, если стандартные опции закрыты (по причине отсутствия ОМС, особого статуса или характеру
                    проблемы), платная госпитализация спасает ситуацию — нередко это работает быстрее и гибче привычной
                    схемы.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '35px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Что нас отличает
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>— Госпитализация</Box>, что называется, без
                    проволочек: от пары часов до суток — не нужно ждать неделями и гадать, когда появится окно.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>— Работаем круглосуточно и без выходных</Box>.
                    Звоните хоть в 3 часа ночи — команда на связи, процесс движется.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>— Есть прямой вход туда, куда сами просто так не
                        попадёшь</Box>: федеральные больницы, ведомственные клиники — открытые двери там, где обычно
                    очередь из направлений.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>— Пациенту не приходится разбираться
                        одному</Box> — сопровождаем на всех этапах: помогли подготовиться, объяснили нюансы приема, всё
                    держим под контролем.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>— Не пугаемся сложных ситуаций</Box>: работаем с
                    тяжелыми случаями, привыкли находить решения там, где другие пасуют. Был у нас случай — казалось бы,
                    без вариантов… а пациент через неделю уже шёл на поправку.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>— Персональный менеджер</Box> — это не просто
                    фраза из буклета. Это человек с именем и телефоном, который реально занимается вашим делом и всегда
                    на связи.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>— Всё по-честному</Box> — официальный договор и
                    документы. Без странных схем или тонкостей “на словах”.
                </Typography>

            </Box>


        </Box>
    );
};
