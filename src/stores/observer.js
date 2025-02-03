import {defineStore} from 'pinia'
import {nextTick, ref} from "vue";
import {useRouter} from "vue-router";

export const useObserverStore = defineStore('orders', () => {
    const router = useRouter()

    const activeSectionId = ref(null);

    const scrollToSection = async (categoryItem) => {
        // await router.push({ hash: `#section${categoryItem.id}` });
        // await nextTick();

        setTimeout(() => {
            const element = document.getElementById(`section${categoryItem.id}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // Обработчик скролла
    const handleScroll = () => {
        const sections = Array.from(document.querySelectorAll('[id^="section"]'));
        let currentSection = null;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= -50 && rect.top <= 200) {
                currentSection = section.id;
            }
        });

        if (currentSection && currentSection !== activeSectionId.value) {
            activeSectionId.value = currentSection;
            router.replace({ hash: `#${currentSection}` });
        }
    };

    return {
        scrollToSection,
        handleScroll
    }
})
