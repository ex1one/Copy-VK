# Соглашения о структуре папки components
> Параметры структуры папок и соглашения об именах

## Именование компонентов
Используйте имя файла в качестве имени компонента.
Например, ReservationCard.tsx должно иметь ссылочное имя ReservationCard.


- Используйте PascalCase для компонентов React.

``` javascript
    // Good
    import ReservationCard from './ReservationCard';
    
    // Bad
    import reservationCard from './ReservationCard';
```

- Используйте `camelCase` для экземпляров компонентов React.

``` javascript
    // Good
    const reservationItem = <ReservationCard />;

    // Bad
    const ReservationItem = <ReservationCard />;
```

---

## Названия свойств
Избегайте использования названий свойств DOM-компонента для других целей.

>Почему? Люди ожидают, что такие свойства как style и className имеют одно определенное значение. Изменение этого API в вашем приложении ухудшает читабельность и поддержку кода, что может приводить к ошибкам.

``` javascript
    // Good
    <MyComponent variant="fancy" />
    
    // Bad
    <MyComponent style="fancy" />
```

---

## Выравнивание
Следуйте приведенным ниже стилям для JSX-синтаксиса.

``` javascript
    // Good
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />
    
    // Bad
    <Foo superLongParam="bar"
    anotherSuperLongParam="baz" />
```

>Если свойства помещаются на одну строку, оставляйте их на одной строке.

``` javascript
    <Foo bar="bar" />
```

Отступ у дочерних элементов задается как обычно.

``` javascript
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>
```

---

## Кавычки
Всегда используйте двойные кавычки: (") для JSX-атрибутов.

``` javascript
    // Good
    <Foo bar="bar" userName="hello" />
    
    // Bad
    <Foo bar='bar' userName='hello' />
    
    // Bad
    <Foo bar='bar' userName="hello" />
```

---

## Пробелы
Не отделяйте фигурные скобки пробелами в JSX.

``` javascript
    // Good
    <Foo bar={baz} />
    
    // Bad
    <Foo bar={ baz } />
```

---

## Свойства (Props)
Названия свойств

- Всегда используйте camelCase для названий свойств.

``` javascript
    // Good
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />

    // Bad
    <Foo
      UserName="hello"
      phone_number={12345678}
    />
```

Значения свойств

- Не указывайте значение свойства, когда оно явно true.

``` javascript
    // Good
    <Foo
      hidden
    />

    // Bad
    <Foo
      hidden={true}
    />
```

Свойство key
- Не используйте индексы элементов массива в качестве свойства key. Отдавайте предпочтение уникальному ID.

``` javascript
    // Good
    {
      todos.map(todo => (
        <Todo
         {...todo}
          key={todo.id}
        />
      ))
    }

    // Bad
    {
      todos.map((todo, index) =>
       <Todo
        {...todo}
        key={index}
       />
     )
    }
```

Круглые скобки
Оборачивайте в скобки JSX теги, когда они занимают больше одной строки.

``` javascript
    // Good
    render() {
      return (
        <MyComponent className="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // Good
    render() {
      const body = <div>hello</div>;

      return <MyComponent>{body}</MyComponent>;
    }

    // Bad
    render() {
      return <MyComponent className="long body" foo="bar">
        <MyChild />
      </MyComponent>;
    }
```
