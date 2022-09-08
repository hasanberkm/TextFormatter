[TR]
TextFormatter bir input maskeleme kütüphanesidir. Bu kütüphaneyi kullanarak inputlarınızı istediğiniz şekilde maskeleyebilirsiniz.
TextFormatter'i kullanırken iki parametreye ihtiyaç duyarsınız. Bunlar 'format' ve 'text' parametreleridir.
Format parametresi sizin değeriniz için kullanacağınız maskedir. Örneğin telefon numarası maskelemek için: '(000) 000 0000' veya '(000) 000 00-00'
Maskeleme yaparken maske türünü siz belirlersiniz bu nedenle kodların içerisinde bir değişiklik yapmanıza gerek kalmaz.
Maskeleme yaparken karakterleri belirli türlere göre (numerik, alfabetik ya da alfanumerik) sınırlayabilirsiniz.
Bunu yapabilmek için 'format' parametresini kullanırken üç farklı karakter kullanabilirsiniz.

0: Maskenizde kullandığınız 0 karakterinin bulunduğu yerlere girilecek değer yalnızca numerik olmak zorundadır.
Örnek: TextFormatter({format: '(000) 000 0000', text: '1234567890'}) => Çıktı: (123) 456 7890

*: Maskenizde kullandığınız * karakterinin bulunduğu yerlere girilecek değer yalnızca alfabetik olmak zorundadır. Örnek bir maskeleme: '********'
Örnek: TextFormatter({format: '********', text: '123ABC45DE678F9GGRE0TR'}) => Çıktı: ABCDEFGG

?: Maskenizde kullandığınız ?  karakterinin bulunduğu yerlere girilecek değer alfanumerik olabilir.
Örnek: TextFormatter({format: '????????', text: '123ABC45DE678F9GGRE0TR'}) => Çıktı: 123ABC45

[EN]
TextFormatter is an input masking library. Using this library, you can mask your inputs any way you want.
You need two parameters when using TextFormatter. These are the 'format' and 'text' parameters.
The format parameter is the mask you will use for your value. For example to mask a phone number: '(000) 000 0000' or '(000) 000 00-00'
While masking, you determine the type of mask, so you do not need to make any changes in the codes.
When masking, you can limit characters to certain types (numeric, alphabetic, or alphanumeric).
To do this, you can use three different characters when using the 'format' parameter.

0: The value to be entered where the 0 character you use in your mask is only numeric.
Example: TextFormatter({format: '(000) 000 0000', text: '1234567890'}) => Output: (123) 456 7890

*: The value to be entered in the places where the * character you use in your mask is located must only be alphabetical. An example masking: '********'
Example: TextFormatter({format: '********', text: '123ABC45DE678F9GGRE0TR'}) => Output: ABCDEFGG

?: The ?: What do you use in your mask? The value to be entered in the places where the character is found can be alphanumeric.
Example: TextFormatter({format: '?????????', text: '123ABC45DE678F9GGRE0TR'}) => Output: 123ABC45
