# JavaScript &ndash; egzamin


## Uwagi dotyczące rozwiązywania zadań

Zwróć zatem uwagę na następujące rzeczy:
* Jeśli w zadaniu jest wspomniane, aby funkcja zwracała wynik to powinna go zwracać, a nie wyświetlać w konsoli.
(Możesz oczywiście dodatkowo wyświetlać)

* Jeśli w treści zadania jest wspomniane, aby konkretny tekst 
został wpisany/zwrócony/wyśwetlony, to powinien być to dokładnie taki 
sam tekst jak w treści zadania.

* Pamiętaj również o tym, aby nazwy funkcji były dokładnie takie same 
jak w treści zadania. 

* Zadania rozwiązuj w odpowiednich plikach **js**.

* Nie zmieniaj nic w plikach HTML.

* Zawsze sprawdzaj, czy Twoje rozwiązanie działa.


---------------------------------------------------------------------

## Zadania

### Zadanie 1
(1 pkt)

Napisz funkcję o nazwie ```getSqrt(n)```, która przyjmuje jako paramert jedną liczbę. Niech funkcja ta zwraca pierwiastek tej liczby. 

Przykład:

```JavaScript
getSqrt(4) // zwróci 2
getSqrt(16) // zwróci 4
```

### Zadanie 2
(2 pkt)

Napisz funkcję o nazwie ```concatArray(array1, array2)```, która przyjmuje jako paramerty dwie tablice. Niech funkcja ta zwraca nową tablicę będącą połączeniem tych dwóch.

Przykład:

```JavaScript
 concatArray( [1,3],[3,5]]) // zwróci [1,3,3,5]
```


### Zadanie 3

(4 pkt)

Napisz funkcję ```bigestSumOfTwoElements(array)```, która przyjmuje tablicę z liczbami i **zwraca** sumę dwóch największych elementów z tej tablicy.
Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby.

* Jeżeli tablica zawiera tylko jeden element, funkcja powinna zwrócić wartość tego elementu.
* Jeżeli tablica zawiera zero elementów, funkcja powinna zwrócić wartość logiczną```false```.

Przykład:
```Javascript
bigestSumOfTwoElements([1,2,3,4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68
```

### Zadanie 4

(5 pkt)

 - Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.
 - Każda funkcja niech **zwraca** tablicę wypełnioną odpowiednimi elementami. ( Pamiętasz, że zwracanie, a wyświetlanie to różnica? )


 Wykonaj następujące polecenia:

* **1. Szukanie nazw tagów:**
   - znajdź wszystkie elementy o **klasie** ```sample_class```,
   - stwórz funkcję ```getTagsOfElements(elements)``` do której przekaż jako argument znalezione elementy,
   - stwórz w funkcji tablicę i wypełnij ją nazwami tagów. Pobierz je z elementów przekazanych jako argument.
   - zwróć tablicę.


* **2. Szukanie nazw klas:**
  - Znajdź element o **id** ```sample_id```.
  - stwórz funkcję ```getClassesOfElement(element)``` do której przekaż jako argument znaleziony element.
  - stwórz w funkcji tablicę i wypełnij ją nazwami klas. Pobierz klasy z przekazanego jako argument elementu.
  - zwróć tablicę.


* **3. Szukanie tekstu:**
  - Znajdź wszystkie elementy __listy__ znajdujące się w elemencie o **klasie** ```sample_class_2```,
  - stwórz funkcję ```getInnerTextsOfElements(elements)```, do której przekaż jako argument znalezione elementy.
  - stwórz w funkcji tablicę i wypełnij ją tekstami pobranymi z elementów przekazanych jako argument.
  - zwróć tablicę.


* **4. Szukanie adresów linków:**
  - Znajdź wszystkie linki,
  - stwórz funkcję ```getAddressesOfElements(elements)```, do której przekaż jako argument znalezione elementy.
  - stwórz w funkcji tablicę i wypełnij ją adresami pobranymi z elementów przekazanych jako argument.
  - zwróć tablicę.


* **5. Szukanie tagów dzieci:**
    - Znajdź wszystkie dzieci elementu o **klasie** ```sample_class_3```,
    - do funkcji, która wyszukuje tagi elementów, przekaż jako argument, znalezione dzieci.



### Zadanie 5

(3 pkt)

Do wszystkich guzików znajdujących się na stronie dopisz event tak, aby po naciśnięciu dowolnego przycisku,  w  **divie** o id ```container``` pojawił się tekst trzymany w ```data-text```. 

### Zadanie 6

(5 pkt)

Na stronie znajduje się lista zakupów. Popatrz na HTML i zobacz jak lista jest zbudowana. Dopisz odpowiednią obsługę eventów tak, aby:

- Po kliknięciu przycisku pierwszego do listy został dopisany nowy produkt - ```chleb```.
- Po kliknięciu przycisku drugiego z listy był usuwany ostatni element.
- Po kliknięciu przycisku trzeciego na końcu listy był dodawany nowy produkt, który jest klonem drugiego produktu.

Pamiętaj że przyciski mogą być klikane w różnych kombinacjach - nie koniecznie po kolei.

__Powodzenia :)__
