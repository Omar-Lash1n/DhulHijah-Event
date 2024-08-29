// Responsive Navbar
function Navbar() {
    const navbarLinks = document.querySelectorAll('.navbar li a');
    navbarLinks.forEach(link => {
        if (link.style.display === 'none' || link.style.display === '') {
            link.style.display = 'inline';
        } else {
            link.style.display = 'none';
        }
    });
}
// Move To Top
document.addEventListener("DOMContentLoaded", function() {
  
  let myImage = document.getElementById("toTop");
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myImage.style.display = "block";
    } else {
      myImage.style.display = "none";
    }
  }
});
//Dark Mode
function DarkMode() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    element.style.backgroundColor = '#d3bdab';
  });
}

//  Arabic
function Home_AR() {
  var t1 = document.getElementById("t1");
  var element1 = document.getElementById("p1");
  var element2 = document.getElementById("p2");
  var element3 = document.getElementById("p3");
  var element4 = document.getElementById("p4");
  var element5 = document.getElementById("p5");
  var element6 = document.getElementById("p6");

  t1.textContent = "ذو الحجة";
  element1.textContent = "فضل العشرة أيام";
  element2.textContent = "ما هو ذو الحجة ؟";
  element3.textContent = "ذو الحجة هو الشهر الثاني عشر والأخير في التقويم الهجري الإسلامي. إنه شهر مهم في الإسلام لأنه مرتبط برحلة الحج السنوية إلى مدينة مكة المكرمة، والتي تعتبر واحدة من أركان الإسلام الخمسة وواجبًا دينيًا إلزاميًا للمسلمين الذين يتاح لهم القدرة المادية والبدنية لأداء الحج";
  element4.textContent = "لماذا هو مهم ؟";
  element5.textContent = 'الأيام العشر الأولى من ذو الحجة تُعتبر أفضل عشرة أيام في السنة، وقتًا لتكثيف الأجر والرحمة. خلال هذه العشرة أيام، يشهد المسلمون يوم عرفة والحج وعيد الأضحى. يمكنك الاستفادة القصوى من الأيام المباركة لذو الحجة عن طريق زيادة عبادتك وذكرك لله سبحانه وتعالى';
  element6.textContent = 'تعلم المزيد';
}
function Contact_AR() {
  var tc1 = document.getElementById("tc1");
  var newButtonText = "إرسال البريد الإلكتروني";
  var newPlaceholder = "* الإسم الأول";
  var newPlaceholder2 = "* الإسم الأخير";
  var newPlaceholder3 = "* البريد الإلكتروني";
  var newPlaceholder4 = "...أكتب شيئاً هنا";
  
  tc1.textContent = "سجل في نشرتنا الإخبارية";
  document.getElementById("pc1").value = newButtonText;
  document.getElementById("fname").placeholder = newPlaceholder;
  document.getElementById("lname").placeholder = newPlaceholder2;
  document.getElementById("email").placeholder = newPlaceholder3;
  document.getElementById("txtarea").placeholder = newPlaceholder4;
}