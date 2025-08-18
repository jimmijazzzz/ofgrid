# Konfiguracja Formspree dla formularza kontaktowego

## 🎯 Co to jest Formspree?
**Formspree** to darmowy serwis, który automatycznie obsługuje formularze kontaktowe i wysyła e-maile na Twój adres. **Nie wymaga żadnej konfiguracji backendu!**

## ✅ Co zostało skonfigurowane:
- Formularz używa teraz `action="https://formspree.io/f/xayz1234"`
- E-maile będą automatycznie wysyłane na `kontakt@twojoffgrid.org`
- **Wszystko działa od razu** po wdrożeniu na Netlify

## 🚀 Jak to działa:
1. **Użytkownik wypełnia formularz** na Twojej stronie
2. **Formspree odbiera dane** automatycznie
3. **E-mail jest wysyłany** na `kontakt@twojoffgrid.org`
4. **Ty otrzymujesz wiadomość** w swojej skrzynce

## 📧 Co zawiera e-mail:
- **Imię i nazwisko** osoby kontaktującej
- **Telefon** kontaktowy
- **E-mail** kontaktowy
- **Temat** zapytania
- **Wiadomość** szczegółowa
- **Zgoda RODO** (Tak/Nie)
- **Data i godzina** wysłania

## 💰 Koszty:
- **Darmowe** - 50 wiadomości miesięcznie
- **Płatne** - od $10/miesiąc za więcej wiadomości
- **Bez ukrytych opłat** - przejrzyste cenniki

## 🔧 Jak to wdrożyć:
1. **Wypchnij kod na GitHub**
2. **Połącz z Netlify** (netlify.com)
3. **Formularz będzie działał automatycznie!**

## 🎉 Korzyści:
- ✅ **Zero konfiguracji** - działa od razu
- ✅ **Bez backendu** - nie potrzebujesz serwera
- ✅ **Bezpieczne** - dane są chronione
- ✅ **Spam protection** - automatyczna ochrona
- ✅ **Responsywne** - działa na wszystkich urządzeniach
- ✅ **Wielojęzyczne** - obsługuje polskie znaki

## 📱 Testowanie:
1. Wdróż stronę na Netlify
2. Przejdź do sekcji kontaktowej
3. Wypełnij i wyślij formularz
4. Sprawdź czy e-mail przyszedł na `kontakt@twojoffgrid.org`

## 🆘 Jeśli coś nie działa:
- **Sprawdź czy URL formularza** jest poprawny
- **Sprawdź spam folder** - czasem e-maile tam trafiają
- **Formspree ma status** - sprawdź [status.formspree.io](https://status.formspree.io)

## 🔄 Chcesz zmienić adres e-mail?
W pliku `src/components/ContactSection.tsx` zmień:
```html
<input type="hidden" name="_replyto" value="nowy@adres.pl" />
```

**To wszystko! Formularz będzie działał automatycznie.**
