import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Задача 2" },
    { name: "description", content: "Описание задачи 2" },
  ];
}

export default function Task2() {
  return (
    <div className="py-16 px-8">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white text-center">Задача 2</h1>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-2">HTML:</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded overflow-x-auto text-sm mb-4"><code>{`<!-- index.html -->
<nav class="nav">
  <button class="hamburger" id="menuBtn">Menu</button>
  <ul class="menu" id="menu">
    <li>Home</li><li>About</li><li>Contact</li>
  </ul>
</nav>`}</code></pre>
        <h2 className="text-xl font-semibold text-white mb-2">CSS:</h2>
        <pre className="bg-gray-900 text-blue-300 p-4 rounded overflow-x-auto text-sm"><code>{`/* styles.css */
.nav {display:flex;justify-content:space-between;align-items:center;}
.menu {display:flex;gap:2rem;}
@media (max-width:768px){
  .menu{flex-direction:column;position:absolute;top:64px;left:0;width:100%;
        background:#fff;transform:translateY(-150%);transition:.3s ease;}
  .menu.open{transform:translateY(0);}
}`}</code></pre>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-2">Что не так с этими участками кода?</h2>
        <div className="bg-yellow-100 text-yellow-900 p-4 rounded mb-4">
          <ul className="list-disc pl-5">
            <li><b>HTML:</b> Кнопка <code>Menu</code> не управляет видимостью меню, отсутствует обработчик событий для открытия/закрытия меню.</li>
            <li><b>CSS:</b> 
              <ul className="list-disc pl-5">
                <li>Мобильное меню появляется только при добавлении класса <code>open</code>, но в HTML нет логики для его добавления.</li>
                <li>Позиционирование <code>.menu</code> <b>absolute</b> может привести к перекрытию контента, если <code>.nav</code> не имеет <code>position: relative</code>.</li>
                <li>Нет стилей для самой кнопки <code>.hamburger</code>, она выглядит как обычная кнопка.</li>
                <li>Нет плавного скрытия/появления меню, если не добавить/убрать класс <code>open</code> через JS.</li>
                <li>Цвет фона меню на мобильных устройствах — <code>#fff</code> (белый), что может быть не видно на светлом фоне.</li>
              </ul>
            </li>
          </ul>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">What is wrong with these code snippets?</h2>
        <div className="bg-yellow-100 text-yellow-900 p-4 rounded mb-4">
          <ul className="list-disc pl-5">
            <li><b>HTML:</b> The <code>Menu</code> button does not control the menu visibility; there is no event handler to open/close the menu.</li>
            <li><b>CSS:</b>
              <ul className="list-disc pl-5">
                <li>The mobile menu appears only when the <code>open</code> class is added, but there is no logic in the HTML to add this class.</li>
                <li><code>.menu</code> uses <b>absolute</b> positioning, which may cause it to overlap content if <code>.nav</code> does not have <code>position: relative</code>.</li>
                <li>There are no styles for the <code>.hamburger</code> button, so it looks like a default button.</li>
                <li>No smooth show/hide animation for the menu unless the <code>open</code> class is toggled via JS.</li>
                <li>The mobile menu background color is <code>#fff</code> (white), which may not be visible on a light background.</li>
              </ul>
            </li>
          </ul>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Исправленные стили CSS:</h2>
        <pre className="bg-gray-900 text-blue-300 p-4 rounded overflow-x-auto text-sm"><code>{`/* styles.css */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* For absolute positioning of the menu */
  background: #222;
  padding: 1rem 2rem;
}
.hamburger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}
.menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li {
  color: #fff;
  cursor: pointer;
}
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .menu {
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: #222;
    transform: translateY(-150%);
    transition: transform .3s ease;
    z-index: 10;
  }
  .menu.open {
    transform: translateY(0);
  }
}`}</code></pre>
      </div>
    </div>
  );
} 