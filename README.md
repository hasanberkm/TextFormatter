<p>[TR]</p>

<p>TextFormatter bir input maskeleme kütüphanesidir. Bu kütüphaneyi kullanarak inputlarınızı istediğiniz şekildemaskeleyebilirsiniz.</p>

<p>
    TextFormatter'i kullanırken iki parametreye ihtiyaç duyarsınız. Bunlar <strong>format</strong> ve <strong>text</strong> parametreleridir.
    <strong>format:</strong> girilen değerleriniz için kullanacağınız maskedir. Örneğin telefon numarası maskelemek için: '(000) 000 0000' veya '(000) 000 00-00'
    <strong>text</strong> maskelemek istediğiniz metindir.
</p>

<ul>
    <li>Maskeleme yaparken maske türünü siz belirlersiniz bu nedenle kodların içerisinde bir değişiklik yapmanıza gerek kalmaz.</li>
    <li>
        Maskeleme yaparken karakterleri belirli türlere göre (numerik, alfabetik ya da alfanumerik) sınırlayabilirsiniz. Bunu yapabilmek için 'format' parametresini kullanırken üç farklı karakter kullanabilirsiniz.
    </li>

    <ul>
        <li>
            <p><strong>0</strong>: Maskenizde kullandığınız 0 karakterinin bulunduğu yerlere girilecek değer yalnızca numerik olmak zorundadır.</p>
            <p>Örnek: TextFormatter({format: '(000) 000 0000', text: '1234567890'}) => Çıktı: (123) 456 7890</p>
        </li>

        <li>
            <p><strong>*</strong>: Maskenizde kullandığınız * karakterinin bulunduğu yerlere girilecek değer yalnızca alfabetik olmak zorundadır.</p>
            Örnek: TextFormatter({format: '********', text: '123ABC45DE678F9GGRE0TR'}) => Çıktı: ABCDEFGG
        </li>

        <li>
            <p><strong>?</strong>: Maskenizde kullandığınız ? karakterinin bulunduğu yerlere girilecek değer alfanumerik olabilir.</p>
            <p>Örnek: TextFormatter({format: '????????', text: '123ABC45DE678F9GGRE0TR'}) => Çıktı: 123ABC45</p>
        </li>
    </ul>
</ul>

<hr>

<p>[EN]</p>

<p>TextFormatter is an input masking library. Using this library, you can mask your inputs as you want.</p>

<p>
    You need two parameters when using TextFormatter. These are the <strong>format</strong> and <strong>text</strong> parameters.
    <strong>format:</strong> is the mask you will use for your entered values. For example to mask a phone number: '(000) 000 0000' or '(000) 000 00-00'
    <strong>text</strong> is the text you want to mask.
</p>

<ul>
    <li>When masking, you determine the type of mask, so you do not need to make any changes in the codes.</li>
    <li>
        When masking, you can limit characters to certain types (numeric, alphabetic, or alphanumeric). To do this, you can use three different characters when using the 'format' parameter.
    </li>

    <ul>
        <li>
            <p><strong>0</strong>: The value to be entered where the 0 character you use in your mask is only numeric.</p>
            <p>Example: TextFormatter({format: '(000) 000 0000', text: '1234567890'}) => Output: (123) 456 7890</p>
        </li>

        <li>
            <p><strong>*</strong>: The value to be entered in the places where the * character you use in your mask must be alphabetical only.</p>
            Example: TextFormatter({format: '********', text: '123ABC45DE678F9GGRE0TR'}) => Output: ABCDEFGG
        </li>

        <li>
            <p><strong>?</strong>: The ? The value to be entered in the places where the character is found can be alphanumeric.</p>
            <p>Example: TextFormatter({format: '??????????', text: '123ABC45DE678F9GGRE0TR'}) => Output: 123ABC45</p>
        </li>
    </ul>
</ul>