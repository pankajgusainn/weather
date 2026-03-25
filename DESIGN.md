# Design System Document: Atmospheric Precision

## 1. Overview & Creative North Star: "The Ethereal Observer"
The goal of this design system is to move weather forecasting away from utilitarian data tables and toward a cinematic, immersive experience. We define our Creative North Star as **"The Ethereal Observer."** 

This system rejects the rigid, "boxy" layout of traditional apps. Instead, it utilizes **intentional asymmetry**—where high-pressure data (current temperature) feels light and expansive, while low-pressure details (humidity, UV index) are anchored in sophisticated, layered modules. By overlapping glass containers and utilizing a typography scale that feels more like a high-end editorial magazine than a dashboard, we create a sense of environmental depth. The UI shouldn't just tell you it’s raining; it should feel like you’re looking through a pristine, rain-streaked window.

## 2. Colors & Environmental Tonality
Our palette is dynamic, but the underlying logic remains constant. We use Material Design token mapping to ensure functional consistency across weather states.

### The "No-Line" Rule
**Prohibit the use of 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` module should sit on a `surface` background to create a "soft-edge" separation. Visual hierarchy is achieved through tonal contrast, not structural lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Base:** `surface` (#020a2f) acts as the deep atmosphere.
*   **Primary Data Layer:** Use `surface-container-low` for large, expansive weather maps.
*   **Actionable Modules:** Use `surface-container-high` or `highest` for secondary data points (e.g., wind speed, visibility) to "lift" them toward the user.

### The Glass & Gradient Rule
To achieve the signature look:
*   **Floating Elements:** Use `surface-variant` at 40% opacity with a `backdrop-blur` of 20px–40px.
*   **Signature Textures:** Apply a linear gradient from `primary` (#6ad6ff) to `primary-container` (#00cbfe) on main CTAs and "Current Condition" hero backgrounds. This provides a "soul" to the digital interface that flat colors cannot mimic.

## 3. Typography: Editorial Authority
We pair the technical precision of **Space Grotesk** with the human readability of **Manrope**.

*   **Display (Space Grotesk):** Reserved for temperatures and primary weather states. `display-lg` (3.5rem) should be used for the current temperature to create an undeniable focal point.
*   **Headlines (Space Grotesk):** Use `headline-md` for location names and severe weather alerts. The geometric nature of the font conveys authority and modernism.
*   **Body & Labels (Manrope):** Use `body-lg` for descriptive forecasts. Manrope’s balanced proportions ensure high legibility even when overlaid on complex glassmorphic backgrounds.
*   **Hierarchy Note:** Use `on-surface-variant` (#a0a9d5) for labels (e.g., "Humidity") to create a clear visual distinction from the data itself, which remains in `on-surface` (#e1e4ff).

## 4. Elevation & Depth: Tonal Layering
We move away from the "shadow-heavy" look of early 2010s design. Depth is achieved through **The Layering Principle**.

*   **Stacking:** Place a `surface-container-lowest` (#000000) card inside a `surface-container-low` (#040f38) section to create a soft, natural "recessed" effect.
*   **Ambient Shadows:** For high-priority floating alerts, use a shadow with a blur of 32px and 6% opacity. The shadow color must be a tinted version of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a container absolutely requires definition against a busy background, use the `outline-variant` (#3d466c) token at **15% opacity**. This creates a suggestion of an edge without breaking the glassmorphic flow.

## 5. Components

### Primary Hero Card (Current Weather)
*   **Background:** `primary-container` with a subtle mesh gradient transition to `surface-bright`.
*   **Blur:** 40px backdrop blur.
*   **Content:** `display-lg` for temp, `headline-sm` for condition. No borders.

### Data Modules (The Grid)
*   **Layout:** Asymmetric sizing (e.g., Wind Speed takes 60% width, UV Index takes 40%).
*   **Styling:** `surface-container-high`, `xl` roundedness (1.5rem). 
*   **Interactions:** On hover/tap, shift background to `surface-container-highest`.

### Buttons & Selection Chips
*   **Primary Button:** Gradient fill (`primary` to `primary-dim`). No shadow. `full` roundedness.
*   **Filter Chips:** Use `tertiary-container` for unselected and `secondary` (#fdd404) for selected to pop against the blue-heavy environment.
*   **Inputs:** `surface-container-lowest` background with a `label-sm` floating above the field.

### Weather Icons (Custom)
*   **Style:** Monolinear but with varying stroke weights.
*   **Dynamic Glow:** Icons should cast a soft glow using their respective color tokens (e.g., a Sun icon casts a `secondary-dim` outer glow).

## 6. Do’s and Don’ts

### Do:
*   **Do** use the Spacing Scale `8` (2.75rem) to provide "breathing room" between major weather sections.
*   **Do** use `secondary` (#fdd404) sparingly for critical highlights like "Sunset" or "High UV."
*   **Do** ensure that text over glassmorphic elements meets a contrast ratio of at least 4.5:1 by adjusting the `backdrop-filter: brightness()`.

### Don’t:
*   **Don’t** use divider lines. Separate list items with `2` (0.7rem) of vertical whitespace or subtle tonal shifts.
*   **Don’t** use `none` or `sm` roundedness. This system requires `lg` (1rem) or `xl` (1.5rem) to maintain an organic, fluid feel.
*   **Don’t** use pure white for text. Use `on-surface` (#e1e4ff) to keep the "blue-hour" atmospheric mood consistent.