import { useEffect, useId, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { siteNavigation } from "../../content/navigation/siteNavigation";

export function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const menuId = useId();
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target;

            if (
                target instanceof Node &&
                !menuRef.current?.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [isOpen]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div
            ref={menuRef}
            className={`mobile-navigation${isOpen ? " mobile-navigation--open" : ""
                }`}
        >
            <button
                ref={buttonRef}
                type="button"
                className="mobile-navigation__toggle"
                aria-expanded={isOpen}
                aria-controls={menuId}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </button>

            <nav
                id={menuId}
                className="mobile-navigation__menu"
                aria-label="Primary navigation"
                aria-hidden={!isOpen}
            >
                {siteNavigation.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === "/"}
                        tabIndex={isOpen ? 0 : -1}
                        className={({ isActive }) =>
                            isActive ? "is-active" : undefined
                        }
                        onClick={closeMenu}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}