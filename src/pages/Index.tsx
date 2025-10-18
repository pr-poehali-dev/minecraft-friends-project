import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'servers', label: 'Сервера', icon: 'Server' },
    { id: 'mods', label: 'Моды', icon: 'Blocks' },
    { id: 'voice', label: 'Голос', icon: 'Mic' },
    { id: 'guide', label: 'Гайд', icon: 'BookOpen' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' }
  ];

  const servers = [
    {
      name: 'Survival World',
      players: '47/100',
      status: 'online',
      version: '1.20.1',
      type: 'Vanilla',
      ip: 'survival.minecraft.server'
    },
    {
      name: 'Creative Build',
      players: '23/50',
      status: 'online',
      version: '1.20.1',
      type: 'Creative',
      ip: 'creative.minecraft.server'
    },
    {
      name: 'Mini-Games Hub',
      players: '89/150',
      status: 'online',
      version: '1.20.1',
      type: 'Minigames',
      ip: 'games.minecraft.server'
    }
  ];

  const mods = [
    {
      name: 'OptiFine',
      category: 'Оптимизация',
      description: 'Улучшает производительность и добавляет HD текстуры',
      downloads: '50M+'
    },
    {
      name: 'JEI (Just Enough Items)',
      category: 'Утилиты',
      description: 'Показывает рецепты крафта всех предметов',
      downloads: '30M+'
    },
    {
      name: 'Biomes O Plenty',
      category: 'Биомы',
      description: 'Добавляет 80+ новых биомов в игру',
      downloads: '20M+'
    },
    {
      name: 'Tinkers Construct',
      category: 'Инструменты',
      description: 'Система создания кастомных инструментов',
      downloads: '25M+'
    }
  ];

  const voiceRooms = [
    { name: 'Общая комната', users: 12, maxUsers: 50 },
    { name: 'PvP Arena', users: 8, maxUsers: 20 },
    { name: 'Строительство', users: 5, maxUsers: 15 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-2xl">
                ⛏️
              </div>
              <h1 className="text-lg sm:text-xl pixel-text text-primary">CraftHub</h1>
            </div>
            <div className="hidden md:flex gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="minecraft-button text-xs"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button className="minecraft-button md:hidden" size="icon" variant="ghost">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card border-border">
                <div className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeSection === item.id ? 'default' : 'ghost'}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full justify-start minecraft-button text-sm"
                    >
                      <Icon name={item.icon as any} size={18} className="mr-3" />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl pixel-text leading-relaxed">
                  Играй в Minecraft
                  <span className="block text-primary mt-2">с друзьями!</span>
                </h2>
                <p className="text-lg text-muted-foreground font-normal">
                  Подключайся к серверам, устанавливай моды и общайся в голосовом чате. Всё что нужно для идеальной игры!
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="minecraft-button bg-primary hover:bg-primary/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="minecraft-button">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать лаунчер
                </Button>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span>1,200+ игроков</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Server" size={16} className="text-accent" />
                  <span>15 серверов</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img
                src="https://cdn.poehali.dev/projects/b9864e97-f25e-49f9-bcf0-1b64f5ab31f2/files/1052e29a-0914-4751-9476-4ae097e157e2.jpg"
                alt="Minecraft Hero"
                className="rounded-lg shadow-2xl border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servers" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl pixel-text mb-4">Наши серверы</h3>
            <p className="text-muted-foreground">Выбери сервер и начни приключение</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {servers.map((server, idx) => (
              <Card key={idx} className="minecraft-button border-2 hover:border-primary transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{server.name}</CardTitle>
                    <Badge variant="default" className="bg-primary">
                      <div className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></div>
                      Online
                    </Badge>
                  </div>
                  <CardDescription>{server.type} • {server.version}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Игроков:</span>
                    <span className="font-semibold text-primary">{server.players}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">IP:</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">{server.ip}</code>
                  </div>
                  <Button className="w-full minecraft-button" size="sm">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Подключиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mods" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl pixel-text mb-4">Популярные моды</h3>
            <p className="text-muted-foreground">Улучши свою игру с лучшими модификациями</p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="optimization">Оптимизация</TabsTrigger>
              <TabsTrigger value="utilities">Утилиты</TabsTrigger>
              <TabsTrigger value="content">Контент</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              {mods.map((mod, idx) => (
                <Card key={idx} className="minecraft-button animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{mod.name}</CardTitle>
                        <CardDescription>{mod.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{mod.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Download" size={14} />
                      <span>{mod.downloads}</span>
                    </div>
                    <Button size="sm" className="minecraft-button">
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="voice" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl pixel-text mb-6">Голосовой чат</h3>
              <p className="text-muted-foreground mb-6">
                Общайся с друзьями прямо во время игры. Создавай свои комнаты или присоединяйся к существующим.
              </p>
              <div className="space-y-3">
                {voiceRooms.map((room, idx) => (
                  <Card key={idx} className="minecraft-button">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                          <Icon name="Mic" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{room.name}</p>
                          <p className="text-xs text-muted-foreground">{room.users}/{room.maxUsers} пользователей</p>
                        </div>
                      </div>
                      <Button size="sm" className="minecraft-button">
                        Войти
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                <Button className="w-full minecraft-button" variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать комнату
                </Button>
              </div>
            </div>

            <div id="guide">
              <h3 className="text-2xl md:text-3xl pixel-text mb-6">Как начать?</h3>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-4 minecraft-button">
                  <AccordionTrigger className="text-left hover:no-underline">
                    1. Установка игры
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Скачай официальный лаунчер Minecraft с minecraft.net или используй наш кастомный лаунчер с предустановленными модами.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border border-border rounded-lg px-4 minecraft-button">
                  <AccordionTrigger className="text-left hover:no-underline">
                    2. Подключение к серверу
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    В меню Multiplayer добавь новый сервер, скопируй IP-адрес из списка наших серверов и подключись. Готово!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border border-border rounded-lg px-4 minecraft-button">
                  <AccordionTrigger className="text-left hover:no-underline">
                    3. Установка модов
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Скачай Forge или Fabric, затем помести файлы модов в папку .minecraft/mods. Перезапусти игру и наслаждайся!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border border-border rounded-lg px-4 minecraft-button">
                  <AccordionTrigger className="text-left hover:no-underline">
                    4. Настройка голосового чата
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Зарегистрируйся на сайте, скачай наше приложение для голосовой связи и подключись к любой комнате. Микрофон настроится автоматически.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl pixel-text mb-4">Новости сообщества</h3>
            <p className="text-muted-foreground">Следи за последними обновлениями</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Обновление 1.20.1',
                date: '15 октября 2024',
                content: 'Новые биомы, мобы и механики крафта уже доступны на всех серверах!'
              },
              {
                title: 'Турнир PvP',
                date: '12 октября 2024',
                content: 'Регистрация на еженедельный турнир открыта. Главный приз - 5000 монет!'
              },
              {
                title: 'Новый мод: BuildCraft',
                date: '10 октября 2024',
                content: 'Автоматизация строительства теперь доступна. Скачивай и тестируй!'
              }
            ].map((news, idx) => (
              <Card key={idx} className="minecraft-button animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">{news.date}</Badge>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{news.content}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-xl">⛏️</div>
                <span className="font-bold pixel-text text-sm">CraftHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучшее место для игры в Minecraft с друзьями
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сервера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Моды</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гайды</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">VK</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Донат</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 CraftHub. Все права защищены. Minecraft является товарным знаком Mojang Studios.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;